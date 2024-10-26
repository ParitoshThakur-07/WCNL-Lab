// 1. Classes and Objects
class User {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      return `Hello, ${this.name}! Today is ${getFormattedDate()}.`;
    }
  }
  
  // 2. Error Handling using try-catch
  function handleErrors(callback) {
    try {
      callback();
    } catch (error) {
      document.getElementById("output").innerHTML = `Error: ${error.message}`;
    }
  }
  
  // 3. Array Handling
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  
  function displayFruits() {
    return `<h3>Fruits List:</h3><ul>${fruits.map(fruit => `<li>${fruit}</li>`).join('')}</ul>`;
  }
  
  // 4. String Handling and Validation
  function validateName(name) {
    if (!name) throw new Error("Name cannot be empty.");
    if (!/^[A-Za-z\s]+$/.test(name)) throw new Error("Name must contain only letters and spaces.");
    return name.trim();
  }
  
  // 5. Date Handling
  function getFormattedDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString(undefined, options);
  }
  
  // 6. Event Listeners for Buttons
  document.getElementById("greetUser").addEventListener("click", function () {
      const nameInput = document.getElementById("name").value;
      const userName = validateName(nameInput);
      const user = new User(userName);
      document.getElementById("output").innerHTML = user.greet();
  });
  
  document.getElementById("displayArray").addEventListener("click", function () {
    document.getElementById("output").innerHTML = displayFruits();
  });
  