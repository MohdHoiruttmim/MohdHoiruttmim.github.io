const expand = document.querySelectorAll(".rounded");
const socBtn = expand[2];
const nav = document.querySelector(".title");
const navItem = document.getElementById("navbar");

socBtn.addEventListener('click', () => {
    for(let i=0; i<3; i++){
        expand[i].classList.toggle('active');
    }
});

nav.addEventListener('click', () =>{
    navItem.classList.toggle('active');
})

// membuat background menjadi transparan pada saat melakukan scroll
window.addEventListener('scroll', () => {
    nav.classList.toggle("active", window.scrollY > 150);
})
