let barraLat = document.getElementById("barra-lat")

function drupMenu(){    
    let subCategoryMenu = document.querySelector(".active");
    if (barraLat.style.display === "block") {
        barraLat.style.display = "none";
        subCategoryMenu.classList.remove("active")
    } else {
        barraLat.style.display = "block";
        searchBar.style.display = "none";
        subCategoryMenu ? subCategoryMenu.classList.remove("active") : ""
    }
}