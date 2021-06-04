const expand = document.querySelectorAll(".rounded");
const nav = document.querySelector(".title");
const navItem = document.getElementById("navbar");
const icon = document.querySelector(".title i");

icon.addEventListener('click', () =>{
    navItem.classList.toggle('resActive');
    icon.classList.toggle("fi-rr-cross");
    icon.classList.toggle("fi-rr-align-left");
})

// membuat background menjadi transparan pada saat melakukan scroll
window.addEventListener('scroll', () => {
    nav.classList.toggle("active", window.scrollY > 200);
    navItem.classList.remove("resActive");
    icon.classList.remove("fi-rr-cross");
    icon.classList.add("fi-rr-align-left");
});

