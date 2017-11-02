
/**
 * @param ms {number} 
 * This is a function used for pause for ${ms} time
 */


const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const reduce = originalNum => originalNum - 1;
const render = data => console.log(`${data} seconds left...`);
const ending = totalTime => {
	console.log(`You have waited for ${totalTime} seconds in vain.`);
	console.log('hhh, tricked you!');
}

const countDown = async ({time, total}) => {
	render(time);
	await pause(1000);
	const nextTime = reduce(time);
	if (nextTime > 0){
		countDown({time: nextTime, total});
	} else {
		ending(total);

	}
};

/**
 * Execute!
 * /
const TOTAL_NUM = 60;
console.log('Something is going on...');
countDown({time: TOTAL_NUM, total: TOTAL_NUM});
