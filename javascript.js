/*=== Set up Section Decorators ===*/
/*=== Doing this so I need to change fewer objects that are copied in multiple places ===*/
let sectionDecoLeft = `
    <div class="side-bar-inner-set side-bar-inner-set-left">
        <div class="side-bar-inner-line-long"></div>
        <div class="side-bar-inner-line-short"></div>
        <div class="side-bar-inner side-bar-inner-left"></div>
    </div>
    <div class="side-bar-mid side-bar-mid-left"></div>
    <div class="side-bar-outer side-bar-outer-left"></div>
`;

let sectionDecoRight = `
    <div class="side-bar-outer side-bar-outer-right"></div>
    <div class="side-bar-mid side-bar-mid-right"></div>
    <div class="side-bar-inner-set side-bar-inner-set-right">
        <div class="side-bar-inner side-bar-inner-right"></div>
        <div class="side-bar-inner-line-short"></div>
        <div class="side-bar-inner-line-long"></div>
    </div>
`;

window.addEventListener("load", decorate);
window.addEventListener("scroll", reveal);

function decorate() {

    let sectionsRight = document.querySelectorAll(".section-content-right");
    let sectionsLeft = document.querySelectorAll(".section-content-left");

    sectionsRight.forEach((e)=>{
        let sectionRightGhost = document.createElement("div");
        sectionRightGhost.classList.add("section-side-bars");
        sectionRightGhost.classList.add("section-side-bars-right");
        sectionRightGhost.innerHTML = sectionDecoRight;
        e.appendChild(sectionRightGhost);
    })
    sectionsLeft.forEach((e)=>{
        let sectionLeftGhost = document.createElement("div");
        sectionLeftGhost.classList.add("section-side-bars");
        sectionLeftGhost.classList.add("section-side-bars-left");
        sectionLeftGhost.innerHTML = sectionDecoLeft;
        e.appendChild(sectionLeftGhost);
    })
}

/*=== The functionality to make the Back-to-top buton appear when you scroll to the bottom of the screen ===*/
function reveal(){

    console.log("scroll");
    let revealPoint = document.querySelector(".reveal");
    console.log("revealPoint: " + revealPoint);
    let reveal = document.querySelector(".back-to-top");
    console.log("reveal: " + reveal);
    
    let windowHeight = window.innerHeight;
    let elementTop = revealPoint.getBoundingClientRect().top;
    // let elementVisible = 0;

    if (elementTop < windowHeight)// - elementVisible)
    {
        reveal.classList.add("active");
    }
    else
    {
        reveal.classList.remove("active");
    }
}