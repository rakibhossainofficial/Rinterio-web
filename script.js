
let openMenu = document.getElementById("phone-header");

document.getElementById("menu-icon").addEventListener("click", () => {
    openMenu.style.display = "flex";
    document.getElementById("close-icon")
    document.getElementById("menu-icon").remove;
})

document.getElementById("close-icon").addEventListener("click", () =>{
    openMenu.style.display = "none"
});


