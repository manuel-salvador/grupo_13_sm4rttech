window.onload=function() {
    let input = document.getElementById("email")
  //  let $pass= document.querySelectorAll("pass")
   
        input.addEventListener("blur",(event=>{
            
            emailValidate = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.value)

          
                if(emailValidate){
                input.style.border = '3px rgba(14, 185, 90, 0.66) solid'
                    input.removeAttribute("error")
                } else {
                    input.style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    input.setAttribute("error", "error")
                })
                
                

  
        
        }
        