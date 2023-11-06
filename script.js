var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove", function(dets){
   crsr.style.left = dets.x+"px" 
   crsr.style.top = dets.y+"px" 
   blur.style.left = dets.x-250+"px" 
   blur.style.top = dets.y -250+"px" 
 })

 
 
 gsap.to(".nav",{
    backgroundColor : "#000",
    height: "110px", 
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:"true",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

 })

 gsap.to(".main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"main",
        scroll:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
 }) 
 gsap.from(".about-us, about-us-in",{
   y:90,
   opacity:0,
   // stagger:"0.2",
   scrollTrigger:{
      trigger: ".about-us",
      scroller:"body",
      start: "top 60%",
      end:"top 55%",
      scrub:3
   }
 })
 gsap.from(".card",{
   scale:"0.8",
   y:90,
   opacity:0,
   stagger:0.4,
   duration:"1",
   scrollTrigger:{
      trigger: ".card",
      scroller:"body",
      start: "top 70%",
      end:"top 65%",
      scrub:1
   }
 })