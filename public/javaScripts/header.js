let navBar = document.getElementById("navigation-bar-mobile");

function dropMenu(){    
    let subcategoryMenu = document.querySelector(".active");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
        subcategoryMenu.classList.remove("active")
    } else {
        navBar.style.display = "block";
        searchBar.style.display = "none";
        subcategoryMenu ? subcategoryMenu.classList.remove("active") : ""
    }
}