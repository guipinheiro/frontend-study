function convertToRoman(num) {
	//Roman numerals object: num -> roman num. From 1 to 3999
	const romanNum = {
		"": "",
		0: "",
		1: "I",
		2: "II",
		3: "III",
		4: "IV",
		5: "V",
		6: "VI",
		7: "VII",
		8: "VIII",
		9: "IX",
		10: "X",
		20: "XX",
		30: "XXX",
		40: "XL",
		50: "L",
		60: "LX",
		70: "LXX",
		80: "LXXX",
		90: "XC",
		100: "C",
		200: "CC",
		300: "CCC",
		400: "CD",
		500: "D",
		600: "DC",
		700: "DCC",
		800: "DCCC",
		900: "CM",
		1000: "M",
		2000: "MM",
		3000: "MMM",
	};

	//Converts number into an array of strings
	let strArr = num.toString().split("");

	//Converts each element into a number
	let i = 0;
	strArr.forEach((elem) => {
		strArr[i] = parseInt(elem);
		i++;
	});

	//Adds empty spaces on the array so there is always 4 elements (considering the input will be between 1 and 3999)
	if (strArr.length === 1) {
		strArr.unshift("", "", "");
	} else if (strArr.length === 2) {
		strArr.unshift("", "");
	} else if (strArr.length === 3) {
		strArr.unshift("");
	}

	//Multiplies each number by its correspondent decimal power of 10
	let multiplier = 1000;
	i = 0;
	strArr.forEach((elem) => {
		if (elem !== "") {
			strArr[i] = elem * multiplier;
		}
		multiplier = multiplier / 10;
		i++;
	});

	let romanStr = "";
	strArr.forEach((elem) => (romanStr += romanNum[elem]));

	return romanStr;
}

