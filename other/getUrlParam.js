					
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


const curry = params => fn => fn ? curry(fn(params)) : params;

const removeHtmlTag = str => str.replace(/<\/?[^>]*>/g, '');
const removeEndSpace = str => str.replace(/[ | ]*\n/g, '\n');
const 
const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
const search = window.location.search.substr(1).match(reg);

const geturlParam = name => 
