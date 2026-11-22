
// Step 1: Select the paragraph and button
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// Step 2: Create the function
function changeMessage() {
    message.textContent = "Hello there!";
}

// Step 3: Add click event listener
changeBtn.addEventListener("click", changeMessage);
