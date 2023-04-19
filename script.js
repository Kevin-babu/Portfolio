
console.log("script loaded");
const toggle = document.getElementById("dn");

if(localStorage.getItem("theme")==null){
  localStorage.setItem("theme", 0);
}
else if(localStorage.getItem("theme")=="dark"){
  console.log("dark")
  toggle.checked = true;
}
console.log(localStorage.getItem("theme"));

function storeTheme(){
 console.log("here");
 let activeTheme = localStorage.getItem("theme");
 if (activeTheme == 0 || activeTheme== "light" ){
        localStorage.setItem("theme", "dark")
    }
    else localStorage.setItem("theme", "light")
}

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollSmoother);
// let smoother = ScrollSmoother.create({
//   wrapper : ".smooth-wrapper",
//   content: ".smooth-content",
//   smooth: 2
// })




const hero = document.querySelector('[data-hero]')

window.addEventListener('mousemove', (e) => {
	const { clientX, clientY } = e
  const x = Math.round((clientX / window.innerWidth) * 100)
  const y = Math.round((clientY / window.innerHeight) * 100)
	
	hero.style.setProperty('--x', `${x}%`)
	hero.style.setProperty('--y', `${y}%`)
})

// const timeline = gsap.timeline({defaults : {duration: 2}});

// timeline.from(".hero", { y:'50%', ease: 'circ', opacity: 0})
        
// gsap.from(".anim-card", {
//            scrollTrigger: {
//             trigger: ".custom-cards",
//             toggleActions: "restart none none none" 
//             } ,
//           y:'50%',
//           ease: 'circ',
//           opacity: 0, 
//           stagger : .25, 
//           duration: 2 });
        
// gsap.from(".skill-card", {
//             scrollTrigger: {
//              trigger: ".skill-card",
//              toggleActions: "restart none none none" ,
//              } ,
//            y:'50%',
//            ease: 'circ',
//            opacity: 0, 
//            stagger : .05, 
//            duration: 2 });


           firstText = "<Web Developer>";
           secondText = "<UI Designer>";
           thirdText = "<Software Engineer>"
           intervalTime = 600;
           window.load = displayText();
           function displayText() {
               // display first text
               document.querySelector('#dynamicContent').innerText = firstText;
               // display second text
               setTimeout(() => {
                   document.querySelector('#dynamicContent').innerText = secondText;
               }, intervalTime * 3);
               // display third text
               setTimeout(() => {
                   document.querySelector('#dynamicContent').innerText = thirdText;
               }, intervalTime * 5);
           }
           
           setInterval(() => {
               displayText();
           }, intervalTime * 7);