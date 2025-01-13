// These are the inputs entered by the user for ther Red Green and Blue
const redColorValue = document.querySelector("#red-value");
const greenColorValue = document.querySelector("#green-value");
const blueColorValue = document.querySelector("#blue-value");

// This is the Generate Color Button
const generateColorBtn = document.querySelector("#generate-color");
// This is the Empty Last Color Button
const emptyLastBtn = document.querySelector("#empty-last");
// This is the Save Palette Button
const savePaletteBtn = document.querySelector("#save-palette");
// This is the Empty All Colors Button
const emptyAllBtn = document.querySelector("#empty-all");

// These are the boxes where the saved colors will go
const savedColorElements = [
  document.querySelector(".color-1"),
  document.querySelector(".color-2"),
  document.querySelector(".color-3"),
  document.querySelector(".color-4"),
  document.querySelector(".color-5"),
];
// Counter to track colors
let currentColorIndex = 0;

// Function that generates and applies the RGB Color
function generateAndSaveColor() {
  // Get values from input fields
  const redValue = redColorValue.value;
  const greenValue = greenColorValue.value;
  const blueValue = blueColorValue.value;
  // Make sure value is a number AND in the range of 0-255
  if (!isNaN(redValue) && redValue >= 0 && redValue <= 255 &&
    !isNaN(greenValue) && greenValue >= 0 && greenValue <= 255 &&
    !isNaN(blueValue) && blueValue >= 0 &&blueValue <= 255) {
    // Create RGB Value
    const rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    // Check to see if there is an available box to update
    if (currentColorIndex < savedColorElements.length) {
      // Updates box to have generated background color
      savedColorElements[currentColorIndex].style.backgroundColor = rgbValue;
      // Update counter
      currentColorIndex++;
    } else {
      alert("All Saved Colors are filled.");
    }
    // Clear the input fields
    redColorValue.value = "";
    greenColorValue.value = "";
    blueColorValue.value = "";
  } else {
    // Error message if inputs are invalid
    alert("Please enter only digits between 0 and 255");
  }
}
// Event listener for Generate Color Button
generateColorBtn.addEventListener("click", generateAndSaveColor);

// Function that empties the last saved color
function emptyLast() {
    // Check if there are any saved colors
    if (currentColorIndex > 0) {
      // Clear the last saved color
      savedColorElements[currentColorIndex - 1].style.backgroundColor = "";
      // Update the counter
      currentColorIndex--;
    } else {
      alert("No saved colors to empty.");
    }
  }
  // Event listener for Empty Last Color Button
  emptyLastBtn.addEventListener("click", emptyLast);

// Function that saves the current colors to local storage
function savePalette() {
  // Create an array to hold the colors
  const savedColors = [];
  // Loop through the saved color elements
  for (let i = 0; i < savedColorElements.length; i++) {
    // Get the background color of the element
    const color = savedColorElements[i].style.backgroundColor;
    // If the color is not empty, add it to the array
    if (color) {
      savedColors.push(color);
    }
  }
  // Save the array to local storage
  localStorage.setItem("colorSwatches", JSON.stringify(savedColors));
  alert('Palette saved!');
  // Function to save an item with a custom name
function saveItem() {
    // Use prompt to get the item name from the user
    const itemName = prompt("Please enter the name for the item:", "DefaultName");
    if (itemName) {
      // Proceed with saving the item using the provided name
      console.log(`The item will be saved as: ${itemName}`);
      // Your saving logic here...
    } else {
      console.log("No name provided. The item will not be saved.");
    }
  }
  // Call the function to execute the prompt and save the item
  saveItem();
}
// Event listener for Save Palette Button
savePaletteBtn.addEventListener("click", savePalette);

// Function that empties all saved colors
function emptyAll() {
    // Loop through the saved color elements
    for (let i = 0; i < savedColorElements.length; i++) {
      // Clear the background color of the element
      savedColorElements[i].style.backgroundColor = "";
    }
    // Reset the counter
    currentColorIndex = 0;
  }
  // Event listener for Empty All Colors Button
  emptyAllBtn.addEventListener("click", emptyAll);
  