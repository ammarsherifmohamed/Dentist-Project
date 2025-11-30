//! loading Page
window.addEventListener("load" , ()=>{
    let loader = document.getElementById("loader");
    loader.classList.add("fade-out");

    setTimeout(()=>{
        loader.style.display = "none";
    },700);
});


//! nav active scrolling

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector('nav ul li a[href="#' + id + '"]').classList.add("active");
            });
        };
    });
});
