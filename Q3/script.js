const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

generateBtn.addEventListener("click", function() {

    numberList.innerHTML = "";

    for (let i = 1; i <= 5; i++) {

        let listItem = document.createElement("li");

        listItem.textContent = "The number is " + i;

        numberList.appendChild(listItem);
    }

});
