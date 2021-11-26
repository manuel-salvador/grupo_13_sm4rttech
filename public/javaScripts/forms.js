var contra = document.querySelectorAll("div > .password-view");

contra.forEach(e => {
    e.addEventListener("click", () => {
        var eyeOpen = e.firstElementChild
        var eyeClosed = e.lastElementChild
        if(e.classList.contains("psw-reveal")){
            // no ver
            e.classList.remove("psw-reveal")
            eyeOpen.style.display = "none"
            eyeClosed.style.display = "block"
            e.previousElementSibling.setAttribute("type", "password")
    
        }else{
            // ver
            e.classList.add("psw-reveal")
            eyeOpen.style.display = "block"
            eyeClosed.style.display = "none"
            e.previousElementSibling.setAttribute("type", "text")
        }
    })
})