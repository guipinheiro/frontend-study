const fs = require("fs");

console.log(1); //Synchronous code

// Callback
/*
//Assynchronous, because it will read the file and "callback" a function when it is ready
//It will be logged after the 3 console.log()
fs.readFile("./in1.txt", (err, contents) => {
	fs.readFile("./in2.txt", (err2, contents2) => {
		console.log(4);
		console.log(err, String(contents));
		console.log(err2, String(contents2));
	});
*/

//Promises
const readFile = (file) =>
	new Promise((resolve, reject) => {
		fs.readFile(file, (err, contents) => {
			if (err) {
				reject(err);
			} else {
				resolve(contents);
			}
		});
	});

/*
const myPromise = readFile("./in1.txt").then((contents) => {
	console.log(String(contents));
});

setTimeout(() => console.log(myPromise), 1000); //will be undefined since our promise has already been fulfilled
*/

//Async Await - syntactic sugar (makes the code more readable and maintainable)

const init = async () => {
	try {
		const contents = await readFile("./in1.txt");
		const contents2 = await readFile("./in2.txt");
		return String(contents) + "\n" + String(contents2);
	} catch (err) {
		console.log(err);
	}
};
init().then((contents) => console.log(contents)); //Returns a promise

//treating errors
/*
const init2 = async () => {
	try {
		const contents = await readFile("./in1.txt");
		const contents2 = await readFile("./in22.txt");
		console.log(String(contents));
		console.log(String(contents2));
	} catch (err) {
		console.log(err);
	}
};
init2();
*/

console.log(2); //Synchronous code
console.log(3); //Synchronous code

