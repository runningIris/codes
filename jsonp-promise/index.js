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
        url += (~url.indexOf('?') ? '&' : '?') + param + '=' + encodeURIComponent(id);
        url = url.replace('?&', '?');

        // Create script
        script = document.createElement('script');
        script.src = url;
        target.parentNode.insertBefore(script, target);

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



