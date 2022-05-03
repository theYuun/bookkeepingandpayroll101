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

window.addEventListener("scroll", reveal);