var tl =gsap.timeline()
tl.from("#nav h3", {
    y: -50,
    delay: 0.6,
    duration: 0.5,
    opacity: 0,
    stagger:0.2,
});
tl.from("#main h1",{
    x: -500,
    delay: 1,
    duration: 0.5,
    opacity: 0,
    stagger:0.4,
})
tl.from("img",{
    x:100,
    rotate:30,
    opacity:0,
    duration:0.5,
    stagger:0.5
    
})