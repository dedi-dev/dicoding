const fs = require('fs')
const path = require('path');
const { stdout } = require('process');

fs.readFile(path.resolve(__dirname, 'notes.txt'), 'utf-8', (error, data) => {
    if (error) {
        console.log('Gafal membaca data');
        return;
    }
    console.log(data);
})

const readableStream = fs.createReadStream(path.resolve(__dirname, 'article.txt'), {
    highWaterMark: 10
})

readableStream.on('readable', () => {
    try {
        stdout.write(`[${readableStream.read()}]`)
    } catch (error) {
        console.log('Gafal membaca data');
    }
})

readableStream.on('end', () => {
    console.log('Done')
})