// 一份不断分配内存却不释放内存的代码
const showMem = function (){
    const mem = process.memoryUsage();
    const format = (bytes) => (bytes / 1024 / 1024).toFixed(2) + 'MB';
    console.log(`
        Process: 
            heapTotal: ${format(mem.heapTotal)}
            heapUsed: ${format(mem.heapUsed)}
            rss: ${format(mem.rss)}
        ---------------------------------------
        `);
};

const useMem = function () {
    const size = 20 * 1024 * 1024;
    const arr = new Array(size);
    let i = 0;
    while (i < size) {
        arr[i] = 0;
        i++;
    }
    return arr;
};

let total = [];

for (let i = 0; i < 15; i++) {
    showMem();
    total.push(useMem());
}

showMem();
