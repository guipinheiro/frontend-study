function telephoneCheck(str) {
	const usRegex =
		/^1\s*(\([1-9]{3}\)\s*|[1-9]{3}[\s-]*)[1-9]{3}[\s-]*[1-9]{4}$|^(\([1-9]{3}\)\s*|[1-9]{3}[\s-]*)[1-9]{3}[\s-]*[1-9]{4}$/g;

	if (str.match(usRegex)) {
		return true;
	}

	return false;
}
