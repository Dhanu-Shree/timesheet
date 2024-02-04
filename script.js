
document.addEventListener('DOMContentLoaded', function () {
    // Counter variables outside the loop
    var counter1 = 1;
    var counter2 = 11;
    var counter3 = 20;

    // Repeat the process 8 times
    for (let i = 0; i < 8; i++) {
      // Generate dynamic IDs
      const dynamicID1 = generateDynamicID('input1');
      const dynamicID2 = generateDynamicID1('input2');
      const dynamicID3 = generateDynamicID3('result');

      // Get references to the actual DOM elements
      const input1Element = document.getElementById(dynamicID1);
      const input2Element = document.getElementById(dynamicID2);
      const resultElement = document.getElementById(dynamicID3);

      if (input1Element && input2Element && resultElement) {
        // Add input event listeners
        input1Element.addEventListener('input', calculateSum);
        input2Element.addEventListener('input', calculateSum);
      } else {
        console.error("Element with ID not found:", dynamicID1, dynamicID2, dynamicID3);
      }

      function calculateSum() {
        const value1 = parseFloat(input1Element.value) || 0;
        const value2 = parseFloat(input2Element.value) || 0;
        
        // Display the sum in the placeholder
        const sum=value1+value2;
        resultElement.placeholder =  (value1 + value2);

        if (sum > 8) {
            resultElement.style.color = 'red';
          } else {
            resultElement.style.color = '';
          }
      }

      // Example usage or further processing
      console.log(dynamicID1, dynamicID2, dynamicID3);
    }

    // Function to generate dynamic IDs
    function generateDynamicID(baseID) {
      return counter1++;
    }

    function generateDynamicID1(baseID) {
      return  counter2++;
    }

    function generateDynamicID3(baseID) {
      return counter3++;
    }
  });
