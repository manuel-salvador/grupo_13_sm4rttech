window.onload = () => {

    let inputsValidates = document.querySelectorAll(".inputValidate")



    inputsValidates.forEach(input => {
        input.addEventListener('blur', (event) => {

            validateLetters = /^[a-zA-Z ]{2,}$/.test(input.value)

            validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.value)

            validatePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-ZÀ-ÿ\d\u00f1\u00d1\W]{8,}$/.test(input.value)

            if (input.id == "name" || input.id == "lastName") {
                if (validateLetters) {
                    input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.removeAttribute("error")
                } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.setAttribute("error", "error")
                }
            }

            if (input.id == "email") {
                if (validateEmail) {
                    input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.removeAttribute("error")
                    return inputEmail = input.value
                } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.setAttribute("error", "error")
                }
            }

            if (input.id == "confirmEmail") {
                if (validateEmail && inputEmail == input.value) {
                    input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.removeAttribute("error")
                }
                else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.setAttribute("error", "error")
                }
            }

            if (input.id == "password") {
                if (validatePass) {
                    input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.nextElementSibling.nextElementSibling.innerText = ""
                    input.removeAttribute("error")
                    return inputPass = input.value
                } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.nextElementSibling.nextElementSibling.innerText = "Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número"
                    input.setAttribute("error", "error")
                }
            }

            if (input.id == "confirmPassword") {
                if (validatePass && inputPass == input.value) {
                    input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.nextElementSibling.nextElementSibling.innerText = ""
                    input.removeAttribute("error")
                } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.nextElementSibling.nextElementSibling.innerText = "Las contraseñas no coinciden"
                    input.setAttribute("error", "error")
                }
            }
        })
    })

    let form = document.getElementById("formRegister")

    form.addEventListener('submit', event => {
        event.preventDefault()

            let error = false;
    
            let elementosForm = form.elements

            for (let index = 0; index < elementosForm.length-1; index++) {
                if(elementosForm[index].value == "" && elementosForm[index].name != "avatar"|| elementosForm[index].error){
                    console.log(elementosForm[index]);
                    elementosForm[index].style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    elementosForm[index].setAttribute("error", "error")
                    document.getElementById("submitErrors").innerHTML = "Los campos señalados son obligatorios *";
                    error = true;
                }
            }

            if(!document.querySelector("input[type=checkbox]").checked){
                error = true;
                document.querySelector("input[type=checkbox]").nextElementSibling.nextElementSibling.innerText = " " + "Debes aceptar los términos y condiciones"
            }
        
            if(!error){
                console.log('Todo bien');
                form.submit()
            }
    })
}