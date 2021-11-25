window.onload = () => {
    let butonEdit = document.querySelectorAll(".edit-rol")

    butonEdit.forEach(boton => {
        boton.addEventListener('click', (event) => {
            let editForm = boton.nextElementSibling
            if(!editForm.classList.contains("reveal")){
                editForm.classList.add("reveal")
                editForm.style.display = ""
                boton.style.display = "none"
            }
        })
    })

    let butonCancel = document.querySelectorAll(".edit-cancel")

    butonCancel.forEach(botonCancel => {
        botonCancel.addEventListener('click', (event) => {
            let editForm = botonCancel.parentElement.parentElement;
            if(editForm.classList.contains("reveal")){
                editForm.classList.remove("reveal")
                editForm.previousElementSibling.style.display = ""
                editForm.style.display = "none"
            }
        })
    })

    let allForms = document.querySelectorAll('.editFormulario')

    allForms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()
    
            let confirmacion = confirm("¿Quiere editar los permisos de este usuario?")
    
            if(confirmacion){
                form.submit()
            }
        })
    })

}