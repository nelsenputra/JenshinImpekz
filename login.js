const inputEmail = document.getElementById("input-email")
const inputPass = document.getElementById("input-pass")
const buttonPlay = document.getElementById("play")

const errorEmail = document.getElementById("errorEmail")
const errorPass = document.getElementById("errorPass")

buttonPlay.addEventListener("click", (event)=>{
    event.preventDefault()

    const emailValue = inputEmail.value
    const passValue = inputPass.value

    if (emailValue == ""){
        errorEmail.innerHTML = "Email cannot be empty"
        errorEmail.style.color = "red"
        inputEmail.style.border = "1px solid red"
    }else{
        errorEmail.innerHTML = ""
        inputEmail.style.border = "none"
    }

    if (passValue == ""){
        errorPass.innerHTML = "Password cannot be empty"
        errorPass.style.color = "red"
        inputPass.style.border = "1px solid red"
    }else{
        errorPass.innerHTML = ""
        inputPass.style.border = "none"
    }
})