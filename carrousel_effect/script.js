//List of imgs inside li elements
const imgsList = document.querySelectorAll("#list-wrapper>ul>li>img");
const listWrapper = document.querySelector("#list-wrapper");
const ulElem = document.querySelectorAll("#list-wrapper>ul");

//Considering imgs have the same size in html, get width of the img
const imgQuantity = imgsList.length;
const imgSize = getComputedStyle(imgsList[0]).width;
const imgSizeValue = parseFloat(imgSize.match(/\d+/gi)[0]);
const imgSizePar = imgSize.match(/[A-Za-z]+/gi)[0];

//Get width of the wrapper to compute how many items are show in the current carrousel and how much it has to
const wrapperSize = getComputedStyle(listWrapper).width;
const wrapperSizeValue = parseFloat(wrapperSize.match(/\d+/gi)[0]);
const wrapperSizePar = wrapperSize.match(/[A-Za-z]+/gi)[0];

//Compute how many whole imgs are shown at the same time and max width of the carrousel
const imgShown = Math.floor(wrapperSizeValue / imgSizeValue);
const carrMaxWidth = imgQuantity * imgSizeValue;

//We will move our carrousel based on the margin-left of our ul which is inside our listWrapper (div)
//We will move from 0 margin-left to the max, which will be computed as carrMaxWidth - imgShown*imgSizeValue
const maxMarginLeft = -(carrMaxWidth - imgShown * imgSizeValue);

//Creating events for each arrow so we can move our imgs in a carrousel effect based on the margin of our ul element
//First computing our current margin-left value so we can move it around
let currentMargin = getComputedStyle(ulElem[0]).marginLeft;
let currentMarginValue = parseFloat(currentMargin.match(/\d+/gi)[0]);
const currentMarginPar = currentMargin.match(/[A-Za-z]+/gi)[0];

//Now get our arrows elements so we can add an event to them
const aLeft = document.querySelector("#left");
const aRight = document.querySelector("#right");

aRight.addEventListener("click", () => {
	//Here we can move from 0  to maxMarginValue (which is negative)
	let movement = -(imgShown * imgSizeValue);
	if (currentMarginValue + movement < maxMarginLeft) {
		currentMarginValue = maxMarginLeft;
	} else {
		currentMarginValue += movement;
	}

	currentMargin = `${currentMarginValue}${currentMarginPar}`;
	ulElem[0].style.marginLeft = currentMargin;
});

aLeft.addEventListener("click", () => {
	//Here we can move from maxMarginValue (which is negative) to 0
	let movement = imgShown * imgSizeValue;
	if (currentMarginValue + movement > 0) {
		currentMarginValue = 0;
	} else {
		currentMarginValue += movement;
	}

	currentMargin = `${currentMarginValue}${currentMarginPar}`;
	ulElem[0].style.marginLeft = currentMargin;
});

