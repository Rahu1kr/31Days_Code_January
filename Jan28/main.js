const output = document.getElementById("pass");
const btn = document.getElementById("btn");


function generatePassword(){
    const length = 12;
    const input = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";
    let password = '';
    for(let i=0; i<length; i++)
    {
        const randomIndex = Math.floor(Math.random()*input.length);
        password += input.charAt(randomIndex);
    }

    output.value = password;
}


function copyPassword(){
    output.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}



