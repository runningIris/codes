const myMap = new Map();

const keyObj = {};
const keyFunc = function () {};
const keyString = 'a string';


// 添加键
myMap.set(keyString, '和键‘a string’关联的值');
myMap.set(keyObj, '和键keyObj关联的值');
myMap.set(keyFunc, '和键keyFunc关联的值');

myMap.size; // 3

// 读取值
console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));

console.log(myMap.get('a string'));
console.log(myMap.get({}));
console.log(myMap.get(function(){}));

console.log('map: ', myMap);
