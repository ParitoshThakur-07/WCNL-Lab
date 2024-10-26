// 1. Variables and Operators
let message = "JavaScript Demo!"; // Variable Declaration
let multiplier = 2;               // Example of a simple numeric variable
console.log(message);             // Using a variable

// 2. Function to Check if a Number is Even or Odd (Conditions)
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return `${num} is Even.`;
  } 
  else {
    return `${num} is Odd.`;
  }
}

// 3. Function to Display the Multiplication Table (Loops)
function multiplicationTable(num) {
  let result = `<h3>Multiplication Table for ${num}</h3><ul>`;
  for (let i = 1; i <= 10; i++) {
    result += `<li>${num} x ${i} = ${num * i}</li>`;
  }
  return result;
}

// 4. Event Listener for Button Clicks (Events)
document.getElementById("checkEvenOdd").addEventListener("click", function () {
  const number = parseInt(document.getElementById("number").value);
  if (!isNaN(number)) {
    document.getElementById("output").innerHTML = checkEvenOdd(number);
  } else {
    document.getElementById("output").innerHTML = "Please enter a valid number.";
  }
});

document.getElementById("displayTable").addEventListener("click", function () {
  const number = parseInt(document.getElementById("number").value);
  if (!isNaN(number)) {
    document.getElementById("output").innerHTML = multiplicationTable(number);
  } else {
    document.getElementById("output").innerHTML = "Please enter a valid number.";
  }
});
