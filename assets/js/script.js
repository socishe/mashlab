
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const group_input = document.getElementsByClassName('control')

form.addEventListener('submit', (e) =>{
	e.preventDefault();
	if(!checkInputs()){
		return false;
	}
	

});

for(let i = 0; i < group_input.length; i++){
	group_input[i].onblur = (e) => {
		let target = e.target.getAttribute('id')
		checkInputs(target);
	}
}


function checkInputs(target = ''){
	//get values from inputs
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	let fine = false;

	if(target == 'email' || target == ''){
		if(emailValue === ''){
			//show error
			setInputState(email, 'Email cannot be blank')
		}else if(!emailIsValid(emailValue)){
			setInputState(email, 'Email is not valid')
		}else{
			setInputState(email, '')
			fine = true;
		}
	}

	if(target == 'password' || target == ''){
		if(passwordValue ===''){
			setInputState(password, 'Password cannot be blank')
			fine = false;
		}else if(passwordValue.length < 5){
			setInputState(password, 'Password must be at least a minimum of 5 charactors')
			fine = false;
		}else{
			setInputState(password, '')
			
			if(!fine) return false;
			fine = true;
		}
	}

	return fine;
	
}

function setInputState(input, message) {
	// body...
	const formControl = input.parentElement;
	const small = formControl.querySelector('.input-error');

	if(message == ''){
		formControl.classList.remove('error');
		formControl.classList.add('valid');
	}else{
		formControl.classList.remove('valid');
		formControl.classList.add('error');
	}	

	//add error message inside small
	small.innerText = message;
}

function emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email)
}