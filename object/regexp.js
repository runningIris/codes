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

console.log('---');
let nameRe = /(\w+)\s(\w+)/;
console.log(nameRe.exec('John Watson??'));
console.log(nameRe.test('k k'));

console.log('---');
const chapterStr = 'For more information, see Chapter 3.4.5.1';
const chapterRe = /see (\w+) (\d+)(\.\d+)*/i;
console.log(chapterStr.match(chapterRe));

console.log('---');
console.log(chapterStr.search(chapterRe));

console.log('---');
const cup = 'Some water, and salt.';
console.log(cup.replace('water', 'chochalate'));
console.log(cup.replace(/\w+\,/, 'whiskey'));
console.log(cup.replace(/(\w+)\,\s.\s(\w+)\./, 
'Some $2 and $1.'));
