const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

const sequenceFunctions = [
	/**
	 * async functions
	 */

	async () => {
		await pause(1000);
		console.log('eat');
	},
	async () => {
		await pause(1000);
		console.log('sleep');
	},
	async () => {
		await pause(1000);
		console.log('run');
		await pause(1000);
	}
	
];

const main = async (sequence) => {
	console.log('begin');
	await pause(1000);
	for(let i = 0; i < sequence.length; i++) {
		await sequence[i]();	
	}
}

main(sequenceFunctions);
