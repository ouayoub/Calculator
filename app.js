var display = document.getElementById("display");
// add to display
function appendToDisplay(input) {
 display.value += input;
}
// clear all
function clearDisplay() {

 display.value = "";

}
// equal code 
function calculate() {
 display.value = eval(display.value);
}

// clear By One
function clearByOne() {
 display.value = display.value.slice(0, -1);
}