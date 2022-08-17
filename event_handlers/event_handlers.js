const withPar = document.querySelector("#js-with-par");
const noPar = document.getElementById("js-no-par");

//Different types of handlers
function hey() {
	alert("Hey");
}

withPar.onclick = hey(); //calls when page is loaded and do not work on click
noPar.onclick = hey; //works

//Multiple Handlers
function hey1() {
	alert("Hey1");
}

function hey2() {
	alert("Hey2");
}

const onclickBtn = document.querySelector("#js-onclick-only");
const addEventBtn = document.querySelector("#js-addEventListener-only"); //this overwrite the first one

onclickBtn.onclick = hey1;
onclickBtn.onclick = hey2;

addEventBtn.onclick = hey; //only one onclick will work and the event listeners won't replace it
addEventBtn.addEventListener("click", hey1);
addEventBtn.addEventListener("click", hey2);

//Removing event Handlers
const withoutFunc = document.querySelector("#without-function");
const withFunc = document.querySelector("#with-function");

withoutFunc.addEventListener("click", () => alert("hey"));
withoutFunc.removeEventListener("click", () => alert("hey"));

withFunc.addEventListener("click", hey);
withFunc.removeEventListener("click", hey);

//Event object
const eventObjectBtn = document.querySelector("#event-object");

//You can pass a callback function that has a parameter that will be threated as the event that happened inside the addEventListener
eventObjectBtn.addEventListener("click", function (event) {
	alert(event.type + " at " + event.currentTarget);
	alert("Coordinates: " + event.clientX + ":" + event.clientY);
});

//Event object
const objectEventBtn = document.querySelector("#object-handler");

let objEvent = {
	handleEvent(event) {
		alert(event.type + " at " + event.currentTarget);
	},
};

objectEventBtn.addEventListener("click", objEvent);

const classEventBtn = document.querySelector("#class-handler");

class Menu {
	handleEvent(event) {
		switch (event.type) {
			case "mousedown":
				classEventBtn.innerHTML = "Mouse button pressed";
				break;
			case "mouseup":
				classEventBtn.innerHTML += "...and released.";
				break;
		}
	}
}

let menu = new Menu();
classEventBtn.addEventListener("mousedown", menu);
classEventBtn.addEventListener("mouseup", menu);

