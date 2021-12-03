window.onload = () => {

    let inputsValidates = document.querySelectorAll(".inputValidate")
  
    inputsValidates.forEach(input => {
        input.addEventListener('blur', (event) => {
            validateLetters = /^[A-z ]+$/.test(input.value)
          
            validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.value)
  
            validatePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-ZÀ-ÿ\d\u00f1\u00d1\W]{8,}$/.test(input.value)
            
            validateAddress= /^([a-zA-Z0-9_-\s]){1,16}$/.test(input.value)
           
            date_regex =/^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/.test(input.value)
            
          
            if (input.id == "name" || input.id == "lastName"|| input.id == "pais"|| input.id == "province") {
                if (validateLetters) {
                    input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.removeAttribute("error")
                } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.setAttribute("error", "error")
                }
            }
           if(input.id=="date"){
      
            if (date_regex) {
                input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                input.removeAttribute("error")
           }else{
              input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
              input.setAttribute("error", "error")
              }
            }
  
            if(input.id=="address"||input.id=="cp"||input.id=="localidad"){
            
              if (validateAddress) {
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
                  } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.setAttribute("error", "error")
                }
            }
  
           
            if (input.id == "pass1") {
                if (validatePass) {
                    input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.nextElementSibling.nextElementSibling.innerText = ""
                    return inputPass1 = input.value
                } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                  
                    input.setAttribute("error", "error")
                }
            }
            if (input.id == "pass2") {
              if (validatePass && inputPass1 == input.value) {
                  input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
              }
              else {
                  input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                  input.setAttribute("error", "error")
              }
          }
  
            
        })
    })
  
    let form = document.getElementById("formedit")
  
    form.addEventListener('submit', event => {
        event.preventDefault()
  
            let error = false;
  
            let elementosForm = form.elements
  
            for (let index = 0; index < elementosForm.length-1; index++) {
                if(elementosForm[index].value == "" && elementosForm[index].name!="redireccion" && elementosForm[index].name!="date" && elementosForm[index].name!="avatar" && elementosForm[index].name!="pais" && elementosForm[index].name!="address" && elementosForm[index].name!="province" && elementosForm[index].name!="localidad" && elementosForm[index].name!="cp" && elementosForm[index].name!="pass1" && elementosForm[index].name!="pass2"||elementosForm[index].error){
                    elementosForm[index].style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    elementosForm[index].setAttribute("error", "error")
                    document.getElementById("submitErrors").innerHTML = "Los campos son obligatorios *";
                    error = true;
                }
                
       
  
            if(!error){
                console.log('Todo bien');
                form.submit()
            }
    }})
   
  }
    
