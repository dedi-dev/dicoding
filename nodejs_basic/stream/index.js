const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
})
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'))

readableStream.on('readable', () => {
    try {
        writeStream.write(readableStream.read()+'\n');
    } catch (error) {
        console.error(error);
    }
})
readableStream.on('end', () => {
    writeStream.end('');
});
