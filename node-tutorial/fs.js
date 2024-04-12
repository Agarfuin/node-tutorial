// FS Module

// Sync read and write
const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');

// Read files and print
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// Write into a file
writeFileSync(
    './content/output.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' },
);

// Async read and write
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.error(err);
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.err(err);
        }
        const second = result;
        writeFile(
            './content/output-async.txt',
            `Async output: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.error(err);
                }
                console.log(result);
            });
    })
});

// Async read and write with promises
const { readFile, writeFile } = require('fs').promises;

// First example: Promise then
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    })
}

getText('./content/first.txt')
    .then(result => { console.log(result); })
    .catch(err => { console.error(err); });


// Second example: Async await
const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile(
            './content/output-promise.txt',
            `This is promisified async await writeFile: first = ${first}, and second = ${second}`);
        console.log(`${first}, ${second}`);
    } catch (err) {
        console.error(err);
    }
}

start();

// Read file as a stream
const { createReadStream } = require('fs');

const stream = createReadStream('./content/big_file.txt', { highWaterMark: 90000 });

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.error(err);
});