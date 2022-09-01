// async function f() {
// 	let promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve("done"), 2000);
// 	});

// 	let result = await promise;
// 	alert(result);
// }

// f();

const searchBtn = document.getElementById("fetch-btn");
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "flex-start";

async function showAvatar() {
	//read json
	let response = await fetch("user.json");
	let userData = await response.json();

	//read github user
	let githubResponse = await fetch(`https://api.github.com/users/${userData.user}`);
	let githubUser = await githubResponse.json();

	//show avatar
	let img = document.createElement("img");
	img.src = githubUser.avatar_url;
	document.body.appendChild(img);

	//wait 3 seconds
	await new Promise((resolve, reject) => {
		return setTimeout(resolve, 3000);
	});
	alert("Img loaded for 3 seconds, it will now be erased");
	//remove img after 3 seconds
	img.remove();

	return null;
}

searchBtn.addEventListener("click", showAvatar);

