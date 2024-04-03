Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hvr",{videos:["https://pagalstatus.com/wp-content/uploads/2024/01/Respect-All-Girls-Whatsapp-Status-Videov.mp4?_=1","https://pagalstatus.com/wp-content/uploads/2024/01/Hai-Mahaveer-Karo-Kalyan-Status-Videos.mp4?_=3","https://pagalstatus.com/wp-content/uploads/2024/01/Jay-Hanuman-Whatsapp-Status-Videos.mp4?_=4"]})



gsap.to(".leftsection", {
  scrollTrigger: {
    trigger: "#mainsection",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub:1 ,
  },
  y: "-300%",
  ease: Power1,
});

// gsap.to(".leftsection",{
//     scrollTrigger:{
//         trigger:"#mainsection",
//         pin:true,
//         start:"top top",
//         end:"bottom bottom",
//         endTrigger:".last",
//         scrub:1,

//     },
//     y:"300%",
//     ease:power1
// })


    

