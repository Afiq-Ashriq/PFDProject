

const input = document.querySelector("input");
const button = document.querySelector("button");

input.addEventListener("keyup", (e) => {
    const currentInput = e.target;
    const nextInput = currentInput.nextElementSibling;
    const prevInput = currentInput.previousElementSibling;

    // Validate if the input is a number
    if (isNaN(currentInput.value)) {
        currentInput.value = "";
        return;
    }

    // Enable the button if the input is not empty
    if (currentInput.value !== "") {
        button.setAttribute("disabled", true);
    }

    // Handle backspace
    if (e.key == "Backspace" && prevInput) {
        prevInput.removeAttribute("disabled");
        prevInput.focus();
    }
    if (currentInput.value.length == 6) {
        button.removeAttribute('disabled');
        button.addEventListener("click", function(){
            window.location.href = "home.html";
        })
    } else {
        enterButton.setAttribute('disabled', true);
    }
});

button.addEventListener("click", function () {
    window.location.href = "index.html";
});
