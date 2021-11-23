var checks = document.querySelectorAll("input[type=checkbox]")
var nodeList = document.querySelectorAll(".producto")
let filter = document.getElementById("filter");
let enabledSettings = []

let productos = [...nodeList]

function dropFiltros(){
    let filterList = document.querySelector(".active");
    if(filter.style.display === "block"){
        filter.style.display = "none";
        filterList.classList.remove("active")
    } else {
        filter.style.display = "block";
    }
}

function filtrar(filtros, products){
    products.forEach(product => {
        if (filtros.length == 0) {
            products.forEach(product => {
                product.classList.add("active")
                if (product.classList.contains("hide")) {
                    product.classList.remove("hide");
                }
            })
            
        }else{
            
            let count = 0
            console.log(" ");
            console.log(product.querySelector('h3').innerHTML);;
            console.log("filtros aplicados " + filtros.length);
            for(var filtro of filtros){
                var key = filtro.name ? filtro.name : "";
                console.log("• Comparando filtro:" + key);
                var valorProducto = product.getAttribute(key) != null ? product.getAttribute(key) : "";
                console.log(valorProducto);
                console.log(filtro.value);
                if( valorProducto.toLowerCase() == filtro.value.toLowerCase() ){
                    count++
                }
                
            }
            if (count > 0) {
                if (product.classList.contains("hide")) {
                    product.classList.remove("hide");
                }
                product.classList.add("active")
            }else{
                if (product.classList.contains("active")) {
                    product.classList.remove("active");
                }
                product.classList.add("hide")
            }
            console.log(product);
            console.log("Se encontraron " + count + " coincidencias");
            console.log("-------------------");
            }
        
        })   
            
        }


checks.forEach(function (checkbox){
    checkbox.addEventListener('change', function(){
        enabledSettings = 
        Array.from(checks) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i =>{return {name:i.name, value:i.value}}) // Add to new array

        filtrar(enabledSettings, productos)
    })
})
