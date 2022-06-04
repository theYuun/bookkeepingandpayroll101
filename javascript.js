/*=== catching events ===*/

window.addEventListener("load", decorate);
window.addEventListener("load", highlightMenuButtonsByView);
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", highlightMenuButtonsByView);

document.querySelector("#privacyPolicyEnable").addEventListener("click", showPrivacyPolicy);
document.querySelector("#privacyPolicyDisable").addEventListener("click", hidePrivacyPolicy);

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

/*=== The functionality that makes objects displayed/hidden ===*/
function showPrivacyPolicy()
{
    document.querySelector(".privacy-policy").classList.remove("hidden");
    document.querySelector(".content").classList.add("blur10");
}
function hidePrivacyPolicy()
{
    document.querySelector(".privacy-policy").classList.add("hidden");
    document.querySelector(".content").classList.remove("blur10");
}

/*=== The functionality to make the Back-to-top button appear when you scroll to the bottom of the screen ===*/
function reveal(){

    let revealPoint = document.querySelector(".reveal");
    let reveal = document.querySelector(".back-to-top");
    
    let windowHeight = window.innerHeight;
    let elementTop = revealPoint.getBoundingClientRect().top;

    if (elementTop < windowHeight)
    {
        reveal.classList.add("active");
    }
    else
    {
        reveal.classList.remove("active");
    }
}

/*=== The functionality to make the Navigation buttons highlight when you scroll to the bottom of the screen ===*/

function highlightMenuButtonsByView(){

    let windowHeight = window.innerHeight;
    let highlightRange = 125;

    let highlightPoints = [
        document.querySelector("#section-contact"),
        document.querySelector("#section-what-we-do"),
        document.querySelector("#section-testimonials"),
        document.querySelector("#section-credentials"),
        document.querySelector("#section-3rd-parties"),
        document.querySelector("#section-social-media")
    ];

    let highlights = [
        document.querySelector(".nav-contact"),
        document.querySelector(".nav-what-we-do"),
        document.querySelector(".nav-testimonials"),
        document.querySelector(".nav-credentials"),
        document.querySelector(".nav-3rd-parties"),
        document.querySelector(".nav-social-media")
    ]

    let elementTops = [
        highlightPoints[0].getBoundingClientRect().top,
        highlightPoints[1].getBoundingClientRect().top,
        highlightPoints[2].getBoundingClientRect().top,
        highlightPoints[3].getBoundingClientRect().top,
        highlightPoints[4].getBoundingClientRect().top,
        highlightPoints[5].getBoundingClientRect().top
    ]

    for(let hlp = 0; hlp < highlightPoints.length; hlp++)
    {
        if(hlp < highlightPoints.length)
        {
            if(elementTops[hlp] < highlightRange && elementTops[hlp] > -highlightRange)
                highlights[hlp].classList.add("nav-highlight");
            else
                highlights[hlp].classList.remove("nav-highlight");
        }

        if(hlp == highlightPoints.length-1)
        {
            if(elementTops[hlp] < window.innerHeight-500)
                highlights[hlp].classList.add("nav-highlight");
            else
                highlights[hlp].classList.remove("nav-highlight");
        }
        
    }
}