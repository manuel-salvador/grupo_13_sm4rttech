window.onload=function() {
    let emailValidate = document.querySelectorAll("email")
    let $pass= document.querySelectorAll("pass")
    emailValidate(input=>
        input.addEventListener("blur",(event=>{
            
            emailValidate = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.value)

            if(input=="email"){
                if(emailValidate){
                input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.removeAttribute("error")
                    return inputEmail = input.value
                } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.setAttribute("error", "error")
                }
                
                

            }
        
        }
        
    