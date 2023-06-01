const menuItems = document.querySelectorAll(".menu-item")
const subMenu = document.querySelectorAll(".sub-menu")
const hamburgerMenu = document.querySelector(".hamburger-menu")
const navbar = document.getElementById("nav")

menuItems.forEach((item,index)=>{
        item.addEventListener("mouseenter",()=>{
                item.querySelector("img").style.transform="rotate(180deg)"
                subMenu[index].style.display="block"
                console.log(subMenu[index]);
        })

        item.addEventListener("mouseleave",()=>{
                item.querySelector("img").style.transform="rotate(360deg)"
                subMenu[index].style.display="none"
        })

})

hamburgerMenu.addEventListener("click",()=>{
if(hamburgerMenu.querySelector("img").getAttribute("src").includes("hamburger")){
        hamburgerMenu.querySelector("img").setAttribute("src","images/icon-close.svg")
        navbar.style.display="flex";

}else{
        hamburgerMenu.querySelector("img").setAttribute("src","images/icon-hamburger.svg")
        navbar.style.display="none";
}

})