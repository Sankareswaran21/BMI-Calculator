function bmiCalculator(){
    let weight = prompt("Enter Your Weight");
    let height = prompt("Enter Your Height");

    let weight1 = parseFloat(weight);
    let height1 = parseFloat(height)/100;
    let res = weight1/(height1**2);
   document.getElementById("res").innerHTML=`Your BMI Value is ${res.toFixed(3)}`;
}