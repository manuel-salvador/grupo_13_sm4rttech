let $eliminar = document.querySelector('#borrar')

$eliminar.addEventListener('click', function(){
    document.querySelector('.modal-background').style.display = "flex"
    document.querySelector('#formedit').style.display = "none"
})

let $cancel=document.querySelector('#cancel')
$cancel.addEventListener('click', function(){
    document.querySelector('.modal-background').style.display = "none"
    document.querySelector('#formedit').style.display = "block"
})
