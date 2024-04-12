// Event Module

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('response', (name, age) => {
    console.log(`data received from ${name}, ${age}`);
});
eventEmitter.on('response', () => {
    console.log(`some other logic here`);
});

eventEmitter.emit('response', 'Harun', 24);