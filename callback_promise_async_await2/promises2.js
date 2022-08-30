//Promise Chain: promise.then() always returns a promise. When the first .then() returns a value, the second .then() can handle this value, that can be passed a third one, and so on. This is called promise chain

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

const ALL_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

//Example 1
let promise = getPromise(ALL_POKEMON_URL);

promise
	.then((result) => {
		let onePokemon = JSON.parse(result).results[0].name;
		return onePokemon;
	})
	.then((onePokemon) => {
		console.log("Example 1: ", onePokemon);
	})
	.catch((error) => {
		console.log("In the catch", error);
	});

//Example 2:
let promise2 = getPromise(ALL_POKEMON_URL);

promise2
	.then((result) => {
		let onePokemon = JSON.parse(result).results[0].url;
		return onePokemon;
	})
	.then((onePokemonURL) => {
		console.log("Example 2: ", onePokemonURL);
		return getPromise(onePokemonURL);
	})
	.then((pokemon) => {
		console.log("Example 2: ", JSON.parse(pokemon));
	})
	.catch((error) => {
		console.log("In the catch", error);
	});

// In this second example, we extract the URL and return it as a value. Then, we use this new URL to get another promise to access the pokemon URL data, and we logged it
// Note that you cannot call then multiple times on the same promise like the next example, it won't be a promise chain

//* THE CODE DOWN BELOW WILL RESULT IN A BUG
// promise.then(result => {
//     let onePokemon = JSON.parse(result).results[0].url;
//     return onePokemon;
// });
// promise.then(onePokemonURL => {
//     console.log(onePokemonURL);
//     return getPromise(onePokemonURL);
// });
// promise.then(pokemon => {
//     console.log(JSON.parse(pokemon));
// });

// Promises static methodes
// Promise.all([promises])
const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

Promise.all([promise_1, promise_2, promise_3])
	.then((result) => {
		console.log(".all()", { result });
	})
	.catch((error) => {
		console.log("An Error Occured");
	});

// Promise.any([promises])

let promise_4 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_5 = getPromise(RATICATE_POKEMONS_URL);
let promise_6 = getPromise(KAKUNA_POKEMONS_URL);

Promise.any([promise_5, promise_6, promise_4])
	.then((result) => {
		console.log(".any()", JSON.parse(result));
	})
	.catch((error) => {
		console.log("An Error Occured");
	});

// Promise.allSettle([promises])

let promise_7 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_8 = getPromise(RATICATE_POKEMONS_URL);
let promise_9 = getPromise("error");

Promise.allSettled([promise_7, promise_8, promise_9])
	.then((result) => {
		console.log(".allSettled: ", { result });
	})
	.catch((error) => {
		console.log("There is an Error!");
	});

// Promise.race([promises])

let promise_11 = getPromise("error2");
let promise_12 = getPromise(RATICATE_POKEMONS_URL);
let promise_10 = getPromise(BULBASAUR_POKEMONS_URL);

Promise.race([promise_10, promise_12, promise_11])
	.then((result) => {
		console.log(".race(): ", JSON.parse(result));
	})
	.catch((error) => {
		console.log(".race(): ", "An Error Occured");
	});

