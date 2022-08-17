console.log("Declare then initialize");
console.log(x);

var x;
x = 2;

console.log(x);

console.log("");
console.log("Declare and initialize");

console.log(y);

var y = 2;

console.log(y);

//
//let b = new Rectangle(10, 20);  //will throw an erros

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}
let b = new Rectangle(10, 20);
console.log(b);

