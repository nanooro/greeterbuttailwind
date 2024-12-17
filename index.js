const userInput = document.getElementById("userInput");
const userInputText = userInput.textContent;
// get the user input reference and text content
const resultName = document.getElementById("resultName");
// get the reference for the p that displays the name
userInput.addEventListener("input", (event) => {
  let eventTextContent = event.target.value;
  // let userInput = document.getElementById("userInput");
  resultName.textContent = "Hello " + eventTextContent;
  if (eventTextContent.trim() === "") {
    resultName.textContent = "Enter name";
  }
});
