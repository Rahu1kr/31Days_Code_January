function reverseString(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
    // return str.split("").reverse().join("");
}
function palindromeCheck(){
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    input = input.toLowerCase();
    if(input==""){
        alert("Please enter your string")
    }else{
        if(input == reverseString(input))
        {
            output.innerHTML = "It's Palindrome!";
        }else{
            output.innerHTML = "It's not Palindrome!";
        }
    }
}