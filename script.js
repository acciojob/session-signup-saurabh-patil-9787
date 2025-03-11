//your JS code here. If required.

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConfirmPass = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit');
// alert("welcome")

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let name1 = inputName.value
    let email2 = inputEmail.value
    let password3 = inputPassword.value
    let confirmPassword4 = inputConfirmPass.value
    console.log(name1)

    if(password3 === confirmPassword4){
    
        sessionStorage.setItem("username",name1);
        sessionStorage.setItem("useremail",email2);
        sessionStorage.setItem("userPass",password3)
		
        alert("Sign up successful!")
    }else{
		alert("Passwords do not match")
	}

})
