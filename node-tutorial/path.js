// Path Module

const path = require('path');

// Returns the path separator based on the OS E.g. "/" for unix, "\" for Windows, etc.
console.log(path.sep);

// Joins the given elements into a single path
const filePath = path.join("/Documents", "Coding", "Python", "ISULib", "main.py");
console.log(filePath);

// Gets the base element in a given path
const base = path.basename(filePath);
console.log(base);

// Resolve an absolute path
const absolute = path.resolve("a", "b", "c");
console.log(absolute);