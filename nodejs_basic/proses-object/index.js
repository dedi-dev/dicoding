const memoryInformation = process.memoryUsage();

console.log(memoryInformation);

const initialMemoryUsage = memoryInformation.heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}

const currMemoryInformation = process.memoryUsage();
const currentMemoryUsage = currMemoryInformation.heapUsed;
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// how to run
// SET NODE_ENV=development && node ./process-object/index.js <Nama Anda> 