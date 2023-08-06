const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});



const squeezeCircle = () => {
    clearTimeout()
    let prevX = 0;
    let prevY = 0;

    let scaleX = 1;
    let scaleY = 1;

    window.addEventListener('mousemove', (details) => {
        clearTimeout(timer);
        scaleX = gsap.utils.clamp(.8, 1.2, details.clientX - prevX);
        scaleY = gsap.utils.clamp(.8, 1.2, details.clientY - prevX);
        prevX = details.clientX;
        prevY = details.clientY;



        mousemove(scaleX, scaleY);

    })


     timer=setTimeout(()=>{
        document.querySelector("#miniCircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`;

    },1000);
}



const mousemove = () => {



    window.addEventListener("mousemove", (details) => {
       
        document.querySelector("#miniCircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) `;

    })

    
}



const firstPageAnim = () => {


    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,


    })
        .to(".boundaryElem", {
            y: '0',
            duration: 1.5,
            delay: -1,
            stagger: .2,
            ease: Expo.easeInOut,
        })



        .from("#lastIntro", {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,


        })







}



mousemove();
squeezeCircle();
firstPageAnim();







