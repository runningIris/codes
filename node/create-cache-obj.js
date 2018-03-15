// 创建一个缓存对象
/*
const cache = {};
const get = function (key) {
    if (cache[key]) {
        return cache[key];
    } else {
        // get from somewhere else
    }
};
const set = (key, value) => cache[key] = value;
*/

// 缓存限制
const LimitableMap = function (limit) {
    this.limit = limit || 10;
    this.map = {};
    this.keys = [];
};

LimitableMap.prototype.set = function (key, value) {
    // 如果达到限制了，那么，去掉缓存对象里的第一个值，腾出空间
    if (!Object.prototype.hasOwnProperty.call(this.map, key)) {
        if (this.keys.length === this.limit) {
            delete map[this.key.shift()];
        }
        this.keys.push(key);
    }
    this.map[key] = value;
};

LimitableMap.prototype.get = function (key) {
    return this.map[key];
};

module.exports = LimitableMap;
