// Promises syntax - A function with only one resolve or reject
// let myPromiseResolved = new Promise(function (resolve, reject) {
// 	resolve("I'm resolved"); //Executer function
// });

// let myPromiseRejected = new Promise(function (resolve, reject) {
// 	reject(new Error("I'm rejected"));
// });

//A promise uses an executer function to complete the task. A consumer function should get notified when executer function is done with either resolving (success) or rejecting (error)

//The handler methods .then(), .catch(), and .finally() helps making the connection between the executer function and the consumer function so that they can be in a sync when a promise is resolves or rejects

//Consuming function:
// const consumerResolved = () => {
// 	myPromiseResolved.then(
// 		(result) => {
// 			console.log(result);
// 		},
// 		(error) => {
// 			console.log(error);
// 		}
// 	);
// };

// const consumerRejected = () => {
// 	myPromiseRejected.then(
// 		(result) => {
// 			console.log(result);
// 		},
// 		(error) => {
// 			console.log(error);
// 		}
// 	);
// };

// The .then() method should be called on the promise object to handle a result (resolve) or an error (reject).
// It accepts 2 parameters: result and error
// It can only handle one result or one error if you are only interested in one of them:
//  promise.then( (result) => {console.log(result)} )
//  promise.then( null, (error) => {console.log(error)}) //Must have a null as a first argument

// Example using Poke API
// Creating a generic function that accepts PokeApi URL and returns a promise

function getPromise(URL) {
	let promise = new Promise(function (resolve, reject) {
		let req = new XMLHttpRequest();
		req.open("GET", URL);
		req.onload = function () {
			if (req.status == 200) {
				resolve(req.response);
			} else {
				reject("There is an error");
			}
		};
		req.send();
	});
	return promise;
}

const consumerPoke = (promise) => {
	promise.then(
		(result) => {
			console.log(result);
		},
		(error) => {
			console.log("We have encountered an error V1");
		}
	);
};

// Valid URL
const ALL_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
let goodPromise = getPromise(ALL_POKEMON_URL);
consumerPoke(goodPromise);

// Now if an invalid url
const BAD_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon-bad";
let badPromise = getPromise(BAD_POKEMON_URL);
consumerPoke(badPromise);

// Instead of using then for both result and error, let's try using the .catch() method
const consumerPokeV2 = (promise) => {
	promise.catch((error) => {
		console.log(error);
	});
};

const BAD_POKEMON_URLV2 = "https://pokeapi.co/api/v2/pokemon-bad";
let badPromiseV2 = getPromise(BAD_POKEMON_URLV2);
consumerPokeV2(badPromiseV2);

// The .finally() handler performs clean ups like stopping a loader, closing a live connection, and so on.
// It will run whether a promise resolves or rejects

let loading = true;
loading && console.log("Loading...");

let goodPromise2 = getPromise(ALL_POKEMON_URL);

goodPromise2
	.finally(() => {
		loading = false;
		console.log(`Promise settled and loading is ${loading}`);
	})
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});

