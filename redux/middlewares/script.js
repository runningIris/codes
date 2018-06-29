
function patchStoreToAddLogging(store) {
    let next = store.dispatch;

    store.dispatch = function dispatchAndLog (action) {
        console.log('dispatching ', action);
        let result = next(action);
        console.log('next state: ', store.getState());
        return result;
    };
}

function patchStoreToAddCrashReporting(store) {
    let next = store.dispatch;
    store.dispatch = function dispatchAndReporting () {
        try {
            return next(action);
        } catch (e) {
            console.error(e);
            Raven.captureException(e, {extra: {action, state: store.getState()}});
            throw e;
        }
    };
}

patchStoreToAddLogging(store);

patchStoreToAddCrashReport(store);


function applyMiddleware (store, middlewares) {
    middlewares = middleares.slice();
    middlewares.reverse();
    let dispatch = store.dispatch;

    middlewares.forEach(middleware => dispatch = middleware(store)(dispatch));
    return {...store, dispatch};
}


/*
为了保证你只能应用 middleware 一次，它作用在 createStore() 上而不是 store 本身。因此它的签名不是 (store, middlewares) => store， 而是 (...middlewares) => (createStore) => createStore。
*/

const thunk = store => next => action => typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
// 这里为什么第一种情况里没有next()? 在这就停了？以后的中间件怎么办？
// 里面触发了新的dispatch


function applyMiddleware(store, middlewares) {
    let dispatch = store.dispatch;

    middlewares.forEach(middleware => {
        dispatch = middleware(store)(dispatch);
    });

    return {...store, dispatch};
}


export default function applyMiddleware(...middleware) {
    return createStore => (...args) => {
        const store = createStore(...args);
        let dispatch = () => {
            throw new Error('not allowed');
        };
        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        };
        const chain = middlewares.map(middleware => middleware(middlewareAPI));
        dispatch = compose(...chain)(store.dispatch);

        return {
            ...store,
            dispatch
        };
    }
}


































