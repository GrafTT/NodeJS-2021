const csv = require('csvtojson');
const fs = require('fs');

const csvFilePath = './app/assets/addresses.csv';
const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(`${__dirname}/result.txt`);

readStream.on('error', function (err) {
    if (err.code == 'ENOENT') {
        console.log("File not Found!");
    } else {
        console.error(err);
    }
});

readStream.pipe(csv()).pipe(writeStream);