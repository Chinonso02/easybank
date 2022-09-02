const navhide = document.querySelector(".navlinks")
const navopen = document.querySelector(".ri-menu-line")
const navclose = document.querySelector(".ri-close-line")

function opennav(){
    navhide.style.top = "5%"
    navopen.style.display = "none"
    navclose.style.display = "block"
}
function closenav(){
    navhide.style.top ="-50%"
    navopen.style.display ="block"
    navclose.style.display ="none"
}
    
