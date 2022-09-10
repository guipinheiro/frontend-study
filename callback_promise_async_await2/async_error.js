//f1() == f2()

async function f1() {
	await Promise.reject(new Error("Error"));
}

async function f2() {
	throw new Error("Error");
}

//Dealing with errors with try and catch

async function f3(url) {
	try {
		let response = await fetch(url);
		let data = await response.json();
		console.log(data);
	} catch (err) {
		alert(err);
	}
}

//If  you don't have a try catch you can simply use .catch after the function

async function f5() {
	let response = await fetch("http://no-such-url");
}

// try f().catch(alert) on console

