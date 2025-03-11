//your JS code here. If required.

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConfirmPass = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit');
// alert("welcome")

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let name = inputName.value
    let email = inputEmail.value
    let password = inputPassword.value
    let confirmPassword = inputConfirmPass.value
    console.log(name1)

    if(password === confirmPassword){
    
        sessionStorage.setItem("name",name);
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("password",password)
		
        alert("Sign up successful!")
    }else{
		alert("Passwords do not match")
	}

})
