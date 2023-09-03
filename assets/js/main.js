let menu =document.querySelector(".nav-right-side  .menu i")
let nav =document.querySelector("header .navbar")
let images=document.querySelectorAll(".pointer")
menu.addEventListener('click',function(){
    menu.classList.toggle("fa-xmark")
    nav.classList.toggle('actives')

})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click",function(e){
       let imgSrc=e.target.getAttribute('src')
        document.querySelector(".big-img").setAttribute('src',imgSrc)
    })
    
}



// owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
