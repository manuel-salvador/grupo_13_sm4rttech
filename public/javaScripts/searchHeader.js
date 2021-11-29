window.onload = () => {

    // Obtengo el input del search
    let search = document.getElementById('input-search');
    
    // Obtengo el elemento form
    let form = document.getElementById("search");

    // Listener al form del search
    form.addEventListener('submit', event => {
        event.preventDefault();

        // Detecto si el usuario no escribio nada
        if(!search.value) {
            // si no detecto nada le hago focus al input
            // no se envian los datos
            search.focus();
        } else {
            // si el usuario escribio algo se envian
            form.submit()
        }
    })

}