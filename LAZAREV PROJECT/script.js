
function page2animation(){
const element = document.querySelectorAll('.right-elem')

element.forEach(function(elem){
   elem.addEventListener('mouseenter',function(){
    // console.log('hello');
    // elem.childNodes[3].style.opacity = 1
    gsap.to(elem.childNodes[3],{
       opacity : 1,
       scale : 1
    })
   })
   elem.addEventListener('mouseleave',function(){
    // console.log('not hello ');
        // elem.childNodes[3].style.opacity = 0
         gsap.to(elem.childNodes[3],{
       opacity : 0,
       scale : 0
    })
   })
   elem.addEventListener('mousemove',function(dets){
      gsap.to(elem.childNodes[3],{
           x:dets.x - elem.getBoundingClientRect().x - 150,
           y:dets.y - elem.getBoundingClientRect().y - 250
      })
   })
})

}
// page2animation()