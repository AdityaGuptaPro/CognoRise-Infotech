function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var bmi = weight / ((height / 100) * (height / 100));

    var message = "Your BMI is " + bmi.toFixed(2) + ". ";

    if (bmi < 18.5) {
        message += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        message += "You are in the normal weight range.";
    } else if (bmi >= 25 && bmi < 30) {
        message += "You are overweight.";
    } else {
        message += "You are obese.";
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerText = message;
    resultDiv.classList.add('result-show'); // Add the class to show the result with animation
}