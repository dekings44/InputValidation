const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
	e.preventDefault();
	//console.log(username.value);
	const username = form.username.value;
	if (usernamePattern.test(username)) {
		feedback.textContent = 'username is valid';
	} else {
		feedback.textContent =
			'username must be letters, min of 6 and max of 12 letters';
	}
});

//Live feedback for keyup events on login forms
form.username.addEventListener('keyup', e => {
	//console.log(e.target.value, form.username.value);
	if (usernamePattern.test(e.target.value)) {
		form.username.setAttribute('class', 'success');
	} else {
		form.username.setAttribute('class', 'error');
	}
});

// testing RegEx
//const username = 'kingsley';
//const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if (result) {
// 	console.log('regex test passed :)');
// } else {
// 	console.log('regex test failed :(');
// }

//Another way of doing it
// let result = username.search(pattern);
// console.log(result);
