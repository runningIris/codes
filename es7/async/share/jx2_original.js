main();

function main (){
  fetchPage1(processList);
}

function processList(list){
  console.log(list);
}

function fetchPage1(callback) {
  var total, listArr;
  var DEFAULT_PAGE_SIZE = 10;
  $.ajax({
    type: 'GET',
    url: 'http://example.com/getlist',
    data: {
      page: 1
    },
    dataType: 'jsonp',
    success: function(response){
      total = response.data.total || 0;
      listArr = response.data.list;
      // 若total>DEFAULT_PAGE_SIZE, 则说明有数据放在第二页，需要重新发请求获取
      if(total > DEFAULT_PAGE_SIZE) {
        // 第一页，第二页
        fetchPage2(listArr, callback)
      } else {
        // 第二页
        callback(listArr);
      }
    },
    error: function(err){
      console.error(err);
    }
  });
}

function fetchPage2(listArr, callback){
  $.ajax({
    type: 'GET',
    url: 'http://example.com/getlist',
    data: {
      page: 2
    },
    dataType: 'jsonp',
    success: function(response){
      var list2 = response2.data.list || [];
      listArr = listArr.concat(list2);
      callback(listArr);
    },
    error: function(err){
      console.error(err);
    }
  });
}