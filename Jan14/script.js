let username = document.getElementById("name");
let emailId = document.getElementById("mail");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
// let phoneNo = document.getElementById("mobileNo");
let submitButton = document.getElementById("btn");

// Input Handlers
function nameHandler(){
    if(username.value === ""){
    setErrorForInput(username, "Username can't be blank");
    }
    else{
        setSuccessForInput(username);
    }
}

function emailHandler(){
    if(emailId.value === ""){
        setErrorForInput(emailId, "Email can't be blank");
    }
    else if(!isEmail(emailId.value)){
        setErrorForInput(emailId, "Enter a valid email address");
    }
    else{
        setSuccessForInput(emailId);
    }
}

function passwordHandler(){
    if(password.value === "")
    {
        setErrorForInput(password, "Password can't be blank");
    }
    else{
        setSuccessForInput(password);
    }
}

function confirmPasswordHandler(){
    if(confirmPassword.value === "")
    {
        setErrorForInput(confirmPassword, "Confirm Password can't be blank");
    }
    else if(password.value !== confirmPassword.value)
    {
        setErrorForInput(confirmPassword, "Enter same password");
    }
    else{
        setSuccessForInput(confirmPassword);
    }
}

function checkAll(){
    nameHandler();
    emailHandler();
    passwordHandler();
    confirmPasswordHandler();
}

function inputHandler(field){
    switch(field){
        case "name":
            nameHandler();
            break;
        case "email":
            emailHandler();
            break;
        case "password":
            passwordHandler();
            break;
        case "confirmPassword":
            confirmPasswordHandler();
            break;
        case "submit":
            checkAll();
    }
}

submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    inputHandler("submit");
});

function setSuccessForInput(field){
    const formHandle = field.parentElement;
    formHandle.className = 'input-container success';
}

function setErrorForInput(field, message){
    const formHandle = field.parentElement;
    formHandle.className = 'input-container error';
    const small = formHandle.querySelector('small');
    small.innerText = message;
}

function isEmail(email){
    const res = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return res.test(String(email).toLowerCase());
}