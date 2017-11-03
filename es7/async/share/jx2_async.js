main();

async function main(){
	var listArr = [];
	var DEFAULT_SIZE = 10;
	var page1 = await fetchPage(1);
	// 若total>10, 则说明有数据放在第二页，需要重新发请求获取
	if(total > DEFAULT_SIZE){
		// 获得第二页请求
		var page2 = await fetchPage(2);
		// 把第一页和第二页的列表数据都放进listArr
		listArr = listArr.concat(page1.data.list, page2.data.list);
	} else {
		// 把第一页的列表数据放进listArr
		listArr = listArr.concat(page1.data.list);
	}

	processList(listArr);
}

function processList(list){
	list.forEach(function(item){
		console.log(item);
	});
}

function fetchPage(page) {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'GET',
			url: 'http://example.com/getlist',
			data: {
				page: page
			},
			success: resolve,
			error: reject
		})
	})
}