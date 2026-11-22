const changeBtn = document.getElementById("changeBtn");
const message = document.getElementById("message");

changeBtn.addEventListener("click", function() {
    message.textContent = "Hello there! The text has been changed.";
});
