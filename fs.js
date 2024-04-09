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