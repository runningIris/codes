function laughAfter2Seconds(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve('hhh');
		}, 2000);
	})
}

async function main(){
	console.log('begin');
	var laughter = await laughAfter2Seconds();
	console.log(laughter);
}

main();
