//When you create a async funtion, it returns a promise, not the value per se
function noAsync() {
	console.log("noAsync");
}

async function yesAsync() {
	console.log("yesAsync");
}

console.log("Returns:", noAsync());
console.log("");
console.log("Returns:", yesAsync());

