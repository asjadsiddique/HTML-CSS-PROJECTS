const openMenu = document.querySelector("#openmenu")
const closeMenu = document.querySelector("#closemenu")
const navOpen = document.querySelector(".navopen")

openMenu.addEventListener("click",()=>{
navOpen.classList.add('active')
  console.log("hello-");
  
})

closeMenu.addEventListener('click',()=>{
   
navOpen.classList.remove('active')
    
    
})

