//? loading Page
window.addEventListener("load" , ()=>{
    let loader = document.getElementById("loader");
    loader.classList.add("fade-out");

    setTimeout(()=>{
        loader.style.display = "none";
    },700);
});


//? nav active scrolling
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


//? Form APP
let btn_nav = document.getElementById("book-btn")
let home = document.getElementById("home")
// let container_form = document.getElementById("container-form")
let form_modal = document.getElementById("form-App")
let form_inputs = document.getElementById("form-containerApp")

//? Error Text
let name_error = document.getElementById("name-error")
let email_error = document.getElementById("email-error")

//? Btn Nav 
btn_nav.addEventListener("click" ,function(e){
    e.preventDefault()
    form_modal.style.display = "flex"
})

//? Success Card
function card(){
    let Successcard = document.getElementById("card")

    Successcard.classList.add("active")

    setTimeout(() => {
        Successcard.classList.remove("active")
    }, 3000);
}

//? Inputs & Validate
form_inputs.addEventListener("submit",function(i){
    i.preventDefault()

    let names = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()

    let valid = true

    // name validate
    if(names === "" ){
        name_error.textContent = "Name must contain at least 3 characters"
        valid = false

    }if (names.length < 3){
        name_error.textContent = "Name Must be more than 3 characters"
        valid = false
    }

    // email validate (basic)
    if(email === "" ||email.indexOf("@") === -1){
        email_error.textContent = "Please enter a valid email"
        valid = false
    }
    
    if(valid){
        form_modal.style.display = "none"
        card()
    }

})


//? Options & Prices
let selection = document.getElementById("select-services")
let priceBox = document.getElementById("price")

selection.addEventListener("change" , function(){
    let price = selection.value

    if(price === ""){
        priceBox.textContent = ""
    }else{
        priceBox.textContent = `Consultation price: ${price}`
    }
})

let close = document.getElementById("close")

close.addEventListener("click" ,()=>{
    form_modal.style.display = "none"
})


//! Nav Bars Responsive

let bars = document.getElementById("bars-outside")
let bars_inside_nav_container = document.getElementById("bars-inside-nav-container")
let nav_container = document.getElementById("container-nav")

bars.addEventListener("click" ,()=>{
    nav_container.style.display = "flex"
    bars.style.display="none"   
    bars_inside_nav_container.style.display = "flex"
})

bars_inside_nav_container.addEventListener("click",()=>{
    nav_container.style.display = "none"
    bars.style.display = "flex"
})
