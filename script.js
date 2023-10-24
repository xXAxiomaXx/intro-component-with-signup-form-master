const firstInput = document.querySelector(".first");
const lastInput = document.querySelector(".last");
const emailInput = document.querySelector(".email");
const passInput = document.querySelector(".pass");

const btn = document.getElementsByClassName("btn")

const errorIconA = document.querySelector(".errorimgA")
const errorIconB = document.querySelector(".errorimgB")
const errorIconC = document.querySelector(".errorimgC")
const errorIconD = document.querySelector(".errorimgD")
const errorMessageA = document.querySelector(".errorPA")
const errorMessageB = document.querySelector(".errorPB")
const errorMessageC = document.querySelector(".errorPC")
const errorMessageD = document.querySelector(".errorPD")

btn[0].addEventListener("click", function onClick(){
    let first = firstInput.value
    let last = lastInput.value
    let email = emailInput.value
    let pass = passInput.value
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/

    if(first == ""){
        errorIconA.classList.remove('hidden')
        errorMessageA.classList.remove('hidden')
        firstInput.style.border = "1px solid red"
    } else{
        errorIconA.classList.add('hidden')
        errorMessageA.classList.add('hidden')
        firstInput.style.border = "1px rgb(231, 231, 231) solid"
    }
    if(last == ""){
        errorIconB.classList.remove('hidden')
        errorMessageB.classList.remove('hidden')
        lastInput.style.border = "1px solid red"
    } else{
        errorIconB.classList.add('hidden')
        errorMessageB.classList.add('hidden')
        lastInput.style.border = "1px rgb(231, 231, 231) solid"
    }
    if(email == ""){
        errorIconC.classList.remove('hidden')
        errorMessageC.classList.remove('hidden')
        emailInput.style.border = "1px solid red"
    } else{
        if(emailRegex.test(email)){
            errorIconC.classList.add('hidden')
            errorMessageC.classList.add('hidden')
            emailInput.style.border = "1px rgb(231, 231, 231) solid"
        } else{
            errorIconC.classList.remove('hidden')
            errorMessageC.classList.remove('hidden')
            emailInput.style.border = "1px solid red"
        }
    }
    if(pass == ""){
        errorIconD.classList.remove('hidden')
        errorMessageD.classList.remove('hidden')
        passInput.style.border = "1px solid red"
    } else{
        errorIconD.classList.add('hidden')
        errorMessageD.classList.add('hidden')
        passInput.style.border = "1px rgb(231, 231, 231) solid"
    }
})