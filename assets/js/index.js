const menuitem = document.getElementById("menuitem")
const ul = document.getElementById("checked")
menuitem.addEventListener("click", function () {
    ul.classList.toggle("show")
});