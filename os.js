// OS Module

const os = require('os');

// Get user info of current user
const user = os.userInfo();
console.log(user);

// Get system uptime
const uptime = os.uptime();
console.log(`user uptime is ${Math.floor(uptime/3600)} hrs ${Math.floor((uptime%3600)/60)} mins ${uptime%60} secs`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);