let points = [2, 3, 1];

//Sorts inplace
//Sort on ascending order
points.sort(function (a, b) {
	return a - b;
});
console.log(points);

//On descending order
let descending = points.sort(function (a, b) {
	return b - a;
});
console.log(points);

