// Get references to the input elements
var number1Input = document.getElementById('1');
var number2Input = document.getElementById('2');
var resultInput = document.getElementById('3');

// Add input event listeners to both input boxes
number1Input.addEventListener('input', performAddition);
number2Input.addEventListener('input', performAddition);

function performAddition() {
    // Get values from input boxes
    var num1 = parseFloat(number1Input.value) || 0;
    var num2 = parseFloat(number2Input.value) || 0;

    // Perform addition
    var result = num1 + num2;

    // Display the result in the third input box
    resultInput.value = result;
}
