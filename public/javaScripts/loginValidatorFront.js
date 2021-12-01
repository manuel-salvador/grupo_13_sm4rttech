window.onload=function() {
    let input = document.getElementById("email")
  
   
        input.addEventListener("blur",(event=>{
            
            emailValidate = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.value)

                if(emailValidate){
                input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.removeAttribute("error")
                } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.setAttribute("error", "error")
                }
                                        
        }))
        }

        let form = document.getElementById("formLogin")
        form.addEventListener('submit', event => {
            event.preventDefault()

            let error = false;
  
            let elementosForm = form.elements
  
            for (let index = 0; index < elementosForm.length-1; index++) {
                if(elementosForm[index].value == "" && elementosForm[index].value != "pass" && !elementosForm[index].classList.contains("boton-ingreso")|| elementosForm[index].error){
                    elementosForm[index].style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    elementosForm[index].setAttribute("error", "error")
                    document.getElementById("submitErrors").innerHTML = "Los campos son obligatorios *";
                    error = true;
                }
            }
  
            if(!error){
                console.log('Todo bien');
                form.submit()
            }

        })