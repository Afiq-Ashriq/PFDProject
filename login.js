const input = document.querySelectorAll("input");
button = document.querySelector("button");


//iterate over all inputs
input.forEach((index,index1)=> {
    index.addEventListener("keyup",(e)=>{
        const currentInput = index,
        nextInput = index.nextElementSibling,
        prevInput = index.previousElementSibling;
        //if value has more than 1 character then clear it
        if(currentInput.value.length > 1){
            currentInput.value="";
            return;
        }
        //if next input is disabled and the current value is not empty
        //enable the next input
        if(nextInput && nextInput.hasAttribute("disabled")&&currentInput.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
        //if backspace is pressed
        if(e.key == "Backspace"){
            input.forEach((inputs,index2)=> {
                if(index1 <= index2 && prevInput){
                    inputs.setAttribute("disabled",true)
                    currentInput.value="";
                    prevInput.focus();
                }
            })
        }
        if (document.querySelectorAll('.input-field input:not([disabled])').length == 6) {
            button.removeAttribute('disabled');
            button.addEventListener("click", function(){
                window.location.href = "home.html";
            })
        } else {
            enterButton.setAttribute('disabled', true);
        }
    })
})

