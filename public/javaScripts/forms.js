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

/* document.addEventListener('click', (event) => {
    try {
        elementId = event.path[0].id
        elementClass = event.path[0].className
    }
    catch {
        elementId = event.target.id
        elementClass = event.path[0].className
    }
    switch (elementClass){
        case "eye-cover":
            toggleEyes(event) 
            event.preventDefault()   
            break;
    }
})

function toggleEyes(event){
    var input = event.target.parentElement.parentElement.children[1].type;
    if(input == "password") {
        event.target.parentElement.parentElement.children[1].type = "text"
    }else{
        event.target.parentElement.parentElement.children[1].type = "password"
    }
} */