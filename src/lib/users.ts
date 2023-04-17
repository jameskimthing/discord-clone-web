const users: { [name: string]: string } = {};

// shamelessly copied from stack overflow
function usernameColor(str: string) {
	if (users[str]) return users[str];

	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	let color = '#';
	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		color += ('00' + value.toString(16)).slice(-2);
	}
	users[str] = color;
	return color;
}

export { usernameColor };
