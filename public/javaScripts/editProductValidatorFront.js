window.onload = () => {

    let inputName = document.getElementById("name")
    inputName.addEventListener('blur', (event) => {
        if (inputName.value.trim().length > 3) {
            inputName.style.border = '3px rgba(14, 185, 90, 0.66) solid'
            inputName.removeAttribute("error")
        } else {
            inputName.style.border = '3px solid rgba(185, 14, 14, 0.66)'
            inputName.setAttribute("error", "error")
        }

    })

    let inputPrice = document.getElementById("price")
    inputPrice.addEventListener('blur', (event) => {
        if (/[\d,]+/.test(inputPrice.value) && inputPrice.value != "0" && inputPrice.value.trim().length > 0) {
            inputPrice.style.border = '3px rgba(14, 185, 90, 0.66) solid'
            inputPrice.removeAttribute("error")
        } else {
            inputPrice.style.border = '3px solid rgba(185, 14, 14, 0.66)'
            inputPrice.setAttribute("error", "error")
        }
    })

    let inputDescription = document.getElementById("description")
    inputDescription.addEventListener('blur', (event) => {
        if (inputDescription.value.trim().length > 5) {
            inputDescription.style.border = '3px rgba(14, 185, 90, 0.66) solid'
            inputDescription.removeAttribute("error")
        } else {
            console.log(inputDescription.value);
            inputDescription.style.border = '3px solid rgba(185, 14, 14, 0.66)'
            inputDescription.setAttribute("error", "error")
        }
    })


    let form = document.getElementById("formEditProduct")

    form.addEventListener('submit', event => {
        event.preventDefault()

            let error = false;
    
            let elementosForm = form.elements

            for (let index = 0; index < elementosForm.length-1; index++) {
                if(elementosForm[index].value == "" && elementosForm[index].name != "redireccion" && elementosForm[index].name != "image" && elementosForm[index].name != "tamaño" && elementosForm[index].name != "smart" && elementosForm[index].name != "capacity" && elementosForm[index].name != "ram" && elementosForm[index].name != "color" || elementosForm[index].error){
                    elementosForm[index].style.border = '3px solid rgba(185, 14, 14, 0.66)'
                    elementosForm[index].setAttribute("error", "error")
                    document.getElementById("submitErrors").innerHTML = "Los campos señalados son obligatorios *";
                    error = true;
                    console.log(elementosForm[index]);

                }
            }
        
            if(!error){
                let modalRedirect = document.getElementById('darken')

                modalRedirect.style.display = 'flex'

                let inputRedirect = document.getElementById('redireccionar')

                document.querySelectorAll('.redirect').forEach(boton =>{
                    boton.addEventListener('click', event => {
                        if(boton.value == 'detalle'){
                            inputRedirect.value = "detalle"
                            console.log('Todo bien');
                            form.submit()
                        }else if (boton.value == 'seguir'){
                            inputRedirect.value = "seguir";
                            console.log('Todo bien');
                            form.submit()
                        }
                    })
                })
            }
    })
}