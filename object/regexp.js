const re = /(\w+)\s(\w+)/;
const str = 'John Smith';
const newStr = str.replace(re, '$2, $1');

console.log(newStr);
console.log('---');

const simpleRegExp = /abc/;
console.log(simpleRegExp.test('The latest airplane designs evolved from slabcraft.'));
console.log(simpleRegExp.test('abc'));

console.log('---');
const borderRE = /a\b/;
console.log(borderRE.test('mmpa'));
console.log(borderRE.test('abbc'));
console.log(borderRE.test('bca hh'));
console.log(borderRE.test('cc aee'));

