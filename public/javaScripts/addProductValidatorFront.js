window.onload = () => {

    let inputName = document.getElementById("name")
    inputName.addEventListener('blur', (event) => {
        console.log(inputName.value);
        if (inputName.value.trim().length > 0) {
            inputName.style.border = '3px rgba(14, 185, 90, 0.66) solid'
            inputName.removeAttribute("error")
        } else {
            inputName.style.border = '3px solid rgba(185, 14, 14, 0.66)'
            inputName.setAttribute("error", "error")
        }

    })

    let inputPrice = document.getElementById("price")
    inputPrice.addEventListener('blur', (event) => {
        if (/[\d,]+/.test(inputPrice.value) && inputPrice.value != "0") {
            inputPrice.style.border = '3px rgba(14, 185, 90, 0.66) solid'
            inputPrice.removeAttribute("error")
        } else {
            inputPrice.style.border = '3px solid rgba(185, 14, 14, 0.66)'
            inputPrice.setAttribute("error", "error")
        }
    })

    let inputDescription = document.getElementById("description")
    inputDescription.addEventListener('blur', (event) => {
        if (inputDescription.value.length > 5) {
            inputDescription.style.border = '3px rgba(14, 185, 90, 0.66) solid'
            inputDescription.removeAttribute("error")
        } else {
            console.log(inputDescription.value);
            inputDescription.style.border = '3px solid rgba(185, 14, 14, 0.66)'
            inputDescription.setAttribute("error", "error")
        }
    })

    let form = document.getElementById("formAddProduct")

    form.addEventListener('submit', event => {
        event.preventDefault()

            let error = false;
    
            let elementosForm = form.elements

            for (let index = 0; index < elementosForm.length-1; index++) {
                if(elementosForm[index].value == "" && elementosForm[index].name != "image" && elementosForm[index].name != "tamaño" && elementosForm[index].name != "smart" && elementosForm[index].name != "capacity" && elementosForm[index].name != "ram" && elementosForm[index].name != "color" || elementosForm[index].error){
                    elementosForm[index].style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    elementosForm[index].setAttribute("error", "error")
                    document.getElementById("submitErrors").innerHTML = "Los campos señalados son obligatorios *";
                    error = true;
                }
            }
        
            if(!error){
                console.log('Todo bien');
                form.submit()
            }
    })

}