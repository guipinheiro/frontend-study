//Event target
let formTarget = document.querySelector("#form-target");

formTarget.onclick = function (event) {
	event.target.style.backgroundColor = "yellow"; //using event.target to target the specific element that happened the event
	event.target.style.color = "black";

	setTimeout(() => {
		alert("event.target = " + event.target.tagName + ", this=" + this.tagName);
		event.target.style.backgroundColor = "";
		event.target.style.color = "white";
	}, 0);
};

//Capture
let captureElements = document.querySelectorAll(".capture");

captureElements.forEach((elem) => {
	elem.addEventListener("click", () => alert(`Capturing: ${elem.tagName}`), true); //Add event listener in capturing phase
	elem.addEventListener("click", () => alert(`Bubbling: ${elem.tagName}`)); //Add event listener in bubbling phase
});

