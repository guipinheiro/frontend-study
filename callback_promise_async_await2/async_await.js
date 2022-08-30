import fetch from "node-fetch";

function getData() {
	const github = fetch("https://api.github.com/users/guipinheiro"); //Saves the promise first, not the result

	//Executes the promise, adding to the Callback Queue
	github.then((res) => {
		console.log(res);
	});

	//Executes a console.log adding it to the Call Stack
	console.log(github);
}

getData();
//Log order

//console.log(github) -> Call Stack first

//After emptying the Call Stack, it will check if Callback queue has returned, if yes, moves to the callstack

//console.log(res)

//If you want to have your promise before anything else, you can use 'await' to make your code literally wait for your promise to be fulfilled
async function getDataAsyncAwait() {
	const github = await fetch("https://api.github.com/users/guipinheiro");
	const githubData = await github.json();
	console.log("\nAsync Code");
	console.log(githubData);
	console.log(1); //even though this would be executed first because this a synchronous line of code and would be attributed to the Call Stack, since we have a async await function, it will execute it last
}
//Now our function getDataAsyncAwait will be a promise itself
getDataAsyncAwait();

//This, on the other hand, will be executed first because it is in the call stack
function getDataNotAsyncAwait() {
	const github = fetch("https://api.github.com/users/guipinheiro");
	const githubData = github.then((res) => {
		return res.json();
	});
	console.log("\nSync Code");
	console.log(githubData);
	console.log(2); //This will be execute before we get the response
}

getDataNotAsyncAwait();

//Simplified
async function getDataAsyncAwaitSimple() {
	const githubData = await fetch("https://api.github.com/users/guipinheiro").then((res) => res.json());
	////const githubData = await github.json();
	console.log("\nAsync Simplified Code");
	console.log(githubData);
	console.log(3);
}
getDataAsyncAwaitSimple();

//Comparisons, same functions, return different objects, with and withou async
//Without Async, returns undefined and prints data from github api
//Hadouken Code
function test1() {
	const github = fetch("https://api.github.com/users/guipinheiro")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
}

//With Async, returns the fulfilled promise and and prints data from github api
//Vertical code
async function test2() {
	const github = await fetch("https://api.github.com/users/guipinheiro");
	const githubData = await github.json();
	console.log(githubData);
}

