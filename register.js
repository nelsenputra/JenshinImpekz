const inputName = document.getElementById("input-name")
const inputEmail = document.getElementById("input-email")
const inputPass = document.getElementById("input-pass")
const inputAge = document.getElementById("input-age")
const checkbox = document.getElementById("checkbox")

const buttonPlay = document.getElementById("play")

const errorName = document.getElementById("errorName")
const errorEmail = document.getElementById("errorEmail")
const errorPass = document.getElementById("errorPass")
const errorAge = document.getElementById("errorAge")
const errorCheck = document.getElementById("errorCheck")


buttonPlay.addEventListener("click", (event)=>{
    event.preventDefault()

    const nameValue = inputName.value
    const emailValue = inputEmail.value
    const passValue = inputPass.value
    const ageValue = inputAge.value

    let cek = 1

    console.log(nameValue)

    if (nameValue == ""){
        errorName.innerHTML = "Name cannot be empty"
        errorName.style.color = "red"
        inputName.style.border = "1px solid red"
        cek = 0
    }else if(!isNaN(nameValue)){
        errorName.innerHTML = "Name cannot field by only a number"
        errorName.style.color = "red"
        inputName.style.border = "1px solid red"
        cek = 0
    }
    else{
        errorName.innerHTML = ""
        inputName.style.border = "none"
    }
    
    if (emailValue == ""){
        errorEmail.innerHTML = "Email cannot be empty"
        errorEmail.style.color = "red"
        inputEmail.style.border = "1px solid red"
        cek = 0
    }else if(!emailValue.includes("@gmail.com")){
        errorEmail.innerHTML = "Email must be @gmail.com"
        errorEmail.style.color = "red"
        inputEmail.style.border = "1px solid red"
        cek = 0
    }else{
        errorEmail.innerHTML = ""
        inputEmail.style.border = "none"
    }
    

    if (passValue == ""){
        errorPass.innerHTML = "Password cannot be empty"
        errorPass.style.color = "red"
        inputPass.style.border = "1px solid red"
        cek = 0
    }else if(passValue.length < 8 || passValue > 30){
        errorPass.innerHTML = "Password must be 8-30 characters"
        errorPass.style.color = "red"
        inputPass.style.border = "1px solid red"
        cek = 0
    }else{
        errorPass.innerHTML = ""
        inputPass.style.border = "none"
        
    }
    
    if (ageValue == ""){
        errorAge.innerHTML = "Age cannot be empty"
        errorAge.style.color = "red"
        inputAge.style.border = "1px solid red"
        cek = 0
    }else if(ageValue < 12){
        errorAge.innerHTML = "Min. 12 years old"
        errorAge.style.color = "red"
        inputAge.style.border = "1px solid red"
        cek = 0
    }else if(isNaN(ageValue)){
        errorAge.innerHTML = "Age must be a number"
        errorAge.style.color = "red"
        inputAge.style.border = "1px solid red"
        cek = 0
    }
    else{
        errorAge.innerHTML = ""
        inputAge.style.border = "none"
    }
    
    if(!checkbox.checked){
        errorCheck.innerHTML = "This field is required"
        errorCheck.style.color = "red"
        checkbox.style.border = "1px solid red"
        cek = 0
    }else{
        errorCheck.innerHTML = ""
        checkbox.style.border = "none"
    }
    
    if(cek == 1)
        location.href = "home.html"    

})