// Original codes
/*
var getUrlParam = function(name){
  function removeHTMLTag(str) {
    str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str=str.replace(/ /ig,'');//去掉
    return str;
  }

  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null)
    return removeHTMLTag(decodeURI(r[2]));
  return null;
}
*/

const curryFn123 = params => fn1 => fn2 => fn3 => fn3(fn2(fn1(params)));



const curry = params => fn => fn ? curry(fn(params)) : params

const doubleMe = x => x * 2;
const add1 = x => x + 1;

console.log(curry(5)(doubleMe)()); // >> 10
console.log(curry(5)(doubleMe)(doubleMe)()); // >> 20
console.log(curry(5)(doubleMe)(add1)(doubleMe)()); // >> 22
