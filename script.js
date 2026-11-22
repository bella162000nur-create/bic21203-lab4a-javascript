const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function() {

    let number = Number(userInput.value);

    if (userInput.value.trim() === "") {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
    }
    else if (!Number.isFinite(number)) {
        result.textContent = "Invalid input. Please enter a valid number.";
        result.style.color = "red";
    }
    else if (number > 10) {
        result.textContent = "The number is greater than 10.";
        result.style.color = "green";
    }
    else if (number < 10) {
        result.textContent = "The number is less than 10.";
        result.style.color = "orange";
    }
    else {
        result.textContent = "The number is equal to 10.";
        result.style.color = "blue";
    }

});