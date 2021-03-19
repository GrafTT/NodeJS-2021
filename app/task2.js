import csv from 'csvtojson'
import fs from 'fs'

const csvFilePath = './assets/books.csv';
const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(`result.txt`);

readStream.on('error', function (err) {
    if (err.code == 'ENOENT') {
        console.log("File not Found!", err);
    } else {
        console.error(err);
    }
});
writeStream.on('error', function (err) {
    if (err.code == 'ENOENT') {
        console.log("File not Found!", err);
    } else {
        console.error(err);
    }
});

readStream.pipe(csv()).pipe(writeStream);