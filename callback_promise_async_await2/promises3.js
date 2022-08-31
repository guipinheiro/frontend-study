//Example using fetch
//import fetch from "node-fetch";

const searchBtn = document.getElementById("fetch-btn");

function loadJson(url) {
	return fetch(url).then((response) => {
		if (response.status == 200) {
			return response.json();
		} else {
			throw Error("Bad url. Check username");
		}
	});
}

function loadGithubUser(user) {
	return loadJson(`https://api.github.com/users/${user}`);
}

function showAvatar(githubUser) {
	return new Promise(function (resolve, reject) {
		let img = document.createElement("img");
		img.src = githubUser.avatar_url;
		img.className = "github-avatar";
		document.body.appendChild(img);

		setTimeout(() => {
			img.remove();
			resolve(githubUser);
		}, 3000);
	});
}

searchBtn.addEventListener("click", () => {
	const user = document.getElementById("github-id").value;
	loadGithubUser(user)
		.then(showAvatar)
		.then((githubUser) => alert(`Finished showing ${githubUser.name} img`))
		.catch(alert);
});

