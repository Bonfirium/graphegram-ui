export const validateName = (name) => {
	if (!name || name.length < 3) { return 'Too short name'; }
	if (name.length > 16) { return 'Too long name'; }
	if ((name.match(/-/g) || []).length > 1) { return 'Name must have only one dash'; }
	if (/^\W/.test(name)) { return 'Name must start with a letter'; }
	if (/[^\d\w-]/.test(name)) { return 'Name must consist only of letters, numbers, or dash.'; }
	return null;
};

export const validatePassword = (password) => {
	if (!password || password.length < 9) { return 'Too short password'; }
	if (/[^A-Za-z0-9!@#$%_-]/.test(password)) { return 'Password should only consists of: A-Za-z0-9!@#$%_-'; }
	return null;
};

export const validatePostingPrivateKey = (key) => {
	if (!/[A-Za-z\d]{51}/.test(key)) { return 'Invalid format'; }
	return null;
};
