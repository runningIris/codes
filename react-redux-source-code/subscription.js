const CLEARED = null;
const nullListeners = {
    notify() {}
};

function createListenerCollection () {
    let current = [];
    let next = [];
    return {
        clear() {
            next = CLEARED;
            current = CLEARED;
        },
        nodify() {
            const listeners = current = next;
            for (let i = 0; i < listeners.length; i++) {
                listeners[i]{}
            }
        },
        get() {
            return next;
        },
        subscribe(listener){
            let isSubscribed = true;
            if (next === current) {
                next = current.slice();
            }
            next.push(listener);
            return function unsubscribe() {
                if (!isSubscribed || current === CLEARED) return;
                isSubscribed = false;
                next.splice(next.indexOf(listener), 1);
            };
        },
    }
}

export default class Subscription {
    constructor (store, parentSub, onStateChange) {
        this.store = store;
        this.parentSub = parentSub;
        this.onStateChange = onStateChange;
        this.unsubscribe = null;
        this.listeners = nullListeners;
    }

    addNestedSub(listener) {
        
    }
    notifyNestedSubs() {

    }
    isSubscribed() {

    }
    trySubscribe() {
    
    }

    tryUnsubscribe() {
    }
}
































