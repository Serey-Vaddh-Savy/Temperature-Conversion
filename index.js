const input = document.getElementById("inputValue");
const convert = document.getElementById("convertbtn");
const result = document.getElementById("displayResult");



convert.onclick = function(){
    let temperature = Number(input.value);
    if(document.getElementById("fahrenheitToCelsius").checked){
        FahrenheitToCelius(temperature);
    }
    else if(document.getElementById("celsiusToFahrenheit").checked){
       CelsiusToFahreneheit(temperature); 
    }
    else{
        result.textContent = "Select an option!";
    } 

}

function CelsiusToFahreneheit(temperature){
    temperature = (temperature * 9/5) + 32;
    result.textContent = temperature.toFixed(2) +"°F";
}

function FahrenheitToCelius(temperature){
    temperature = (temperature - 32) * 5/9;
    result.textContent = temperature.toFixed(2) +"°C";

}