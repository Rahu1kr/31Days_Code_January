// function calculatorBMI()
// {
//     var heightInput= document.getElementById("height");
//     var weightInput= document.getElementById("weight");
//     var resultDiv= document.getElementById("result");

//     var height = parseFloat(heightInput.value);
//     var weight = parseFloat(weightInput.value);

//     if(isNaN(height) || isNaN(weight)){
//         resultDiv.innerHTML = "Please enter valid height and weight.";
//         return;
//     }
//     var bmi = weight/((height/100)**2);
//     var category ="";

//     if(bmi<18.5){
//         category = "Underweight";
//     }
//     else if(bmi < 25){
//         category = "Normal weight";
//     }
//     else if(bmi < 30){
//     category = "Overweight";
//     }
//     else{
//     category = "Obese";
//     }
//     resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " ("+ category + ")";
// }
// // function calculateBMI() {
// //     var heightInput = document.getElementById("height");
// //     var weightInput = document.getElementById("weight");
// //     var resultDiv = document.getElementById("result");
  
// //     var height = parseFloat(heightInput.value);
// //     var weight = parseFloat(weightInput.value);
  
// //     if (isNaN(height) || isNaN(weight)) {
// //       resultDiv.innerHTML = "Please enter valid height and weight.";
// //       return;
// //     }
  
// //     var bmi = weight / ((height / 100) ** 2);
// //     var category = "";
  
// //     if (bmi < 18.5) {
// //       category = "Underweight";
// //     } else if (bmi < 25) {
// //       category = "Normal weight";
// //     } else if (bmi < 30) {
// //       category = "Overweight";
// //     } else {
// //       category = "Obese";
// //     }
  
// //     resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
// //   }

window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span>`;

		else if(bmi <30)
            result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
        else result.innerHTML =
            `Obese : <span>${bmi}</span>`;
	}
}
