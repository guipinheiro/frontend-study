// Example of loading a script
function loadScript1(src) {
	let script = document.createElement("script");
	script.src = src;
	document.head.append(script);
}

//! loadScript1("callback_scripts/call_script.js");

// try using the function on call_script just after loading it:
//! console.log(newFunc("a"));
// This will throw an error, because since the script on loadScript() is just starting to load, but will run later. So, since it will be asynchronously executed, our console.log(newFunc("a")) will run before the script is executed (difference between call stack and callback queue)

// Now, let's try using the same function, but adding a callback parameter that will run after our script is loaded
function loadScript2(src, callback) {
	let script = document.createElement("script");
	script.src = src;
	script.onload = () => callback(script); //this will execute our callback after the script is loaded, not causing an error
	document.head.append(script);
}

// This way
loadScript2("callback_scripts/call_script.js", function () {
	console.log("callback_scripts/call_script.js is loaded");
	let newDiv = document.createElement("div");
	newDiv.innerText = newFunc(
		"newFunc() was executed after the script is loaded.\nThis is called callback-based style of asynchronous programming"
	);
	document.body.appendChild(newDiv);
});

// We could also load many other scripts creating callbacks inside callbacks like this:
loadScript2("callback_scripts/call_script1.js", function () {
	console.log("callback_scripts/call_script1.js is loaded");
	loadScript2("callback_scripts/call_script2.js", function () {
		console.log("callback_scripts/call_script2.js is loaded");
		// ...And so on
		//! This is not very good after many callbacks due readability and mantainability
	});
});

// Handling Erros
function loadScript3(src, callback) {
	let script = document.createElement("script");
	script.src = src;
	script.onload = () => callback(null, script);
	script.onerror = () => callback(new Error(`Script load error for ${src}`));
	document.head.append(script);
}

loadScript3("callback_scripts/call_script3.js", function (error, script) {
	let newDiv = document.createElement("div");
	if (error) {
		newDiv.innerText = error;
	} else {
		console.log("callback_scripts/call_script3.js is loaded");
		newDiv.innerText = script.src + " was not an error";
	}
	document.body.appendChild(newDiv);
});

loadScript3("callback_scripts/call_script4.js", function (error, script) {
	let newDiv = document.createElement("div");
	if (error) {
		newDiv.innerText = error;
	} else {
		console.log("callback_scripts/call_script3.js is loaded");
		newDiv.innerText = script.src + " was not an error";
	}
	document.body.appendChild(newDiv);
});

