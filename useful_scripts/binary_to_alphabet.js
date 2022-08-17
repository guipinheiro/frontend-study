function binaryAgent(str) {
	//Input must be a string with bits
	let binaryArr = str.split(" ");

	function binaryToString(bit) {
		return String.fromCharCode(parseInt(bit.toString(2), 2));
	}

	return binaryArr.map(binaryToString).join("");
}

let phrase = "Guilherme was here! :)";
let splitPhrase = phrase.split(""); //Split phrase letter by letter in an array
let phraseCharCode = splitPhrase.map((letter) => letter.charCodeAt(0)); //Convert letters into utf-16 char codes
let phraseBits = phraseCharCode.map((num) => num.toString(2)); //convert char codes into an array of binary code
let stringBits = phraseBits.join(" "); //joins binary array separated by spaces

console.log(binaryAgent("1001000 1101001 100001"));
console.log(binaryAgent(stringBits));

