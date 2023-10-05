function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);


    if (!isNaN(weight) && !isNaN (height) && height > 0) {
        const BMI = weight / ((height / 100) ** 2);
        let category = "";

        if (BMI < 18.5) {
            category = "Underweight";
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            category = "Normal Weight";
        } else if (BMI >= 25 && BMI <= 29) {
            category = "Overweight";
        } else {
            category = "Obesitas";
        }

        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Your BMI is ${BMI.toFixed(2)} which means You are ${category}`;  
    
    } else {
        alert("Enter your weight and height correctly!");
    }
}