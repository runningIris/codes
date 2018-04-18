let count = 0;

const jsonp = function (url, options = {}) {

    const {
        prefix = '__jp',
        param = 'callback',
        timeout = '15000'
    } = options;

    const target = document.getElementsByTagName('script')[0] || document.head;

    let script, timer, cancel;
    let noop = () => {};

    let id = prefix + (count++);

    let cleanup = function () {
        // Remove the script tag
        if (script && script.parentNode) {
            script.parentNode.removeChild(script);
        }

        window[id] = noop;

        if (timer) {
            clearTimeout(timer);
        }
    };

    let promise = new Promise((resolve, reject) => {
        if (timeout) {
            timer = setTimeout(() => {
                cleanup();
                reject(new Error('Timeout'));
            }, timeout);
        }

        window[id] = (data) => {
            cleanup();
            resolve(data);
        };

        // Add querystring component
        // 这里为什么要用位操作符的反码来进行判断？有啥优势吗？
        url += (~url.indexOf('?') ? '&' : '?') + param + '=' + encodeURIComponent(id);
        url = url.replace('?&', '?');

        // Create script
        script = document.createElement('script');
        script.src = url;
        target.parentNode.insertBefore(script, target);

        // 现在可以理解为什么可以把cancel作为一个API暴露给外部使用了。。
        // promise 返回的是一个对象，PENDING状态是可以转化为FULFILLED或者REJECTED
        // 而reject操作可以把状态转化为REJECTED，进而终止整个Promise的流程。
        // reject操作在状态为FULFILLED或者REJECTED的时候无效。

        cancel = function () {
            if (!window[id]){
                return;
            }
            cleanup();
            reject(new Error('Canceled');
        };
    };

    return {
        promise,
        cancel
    };
};

module.exports = jsonp;



