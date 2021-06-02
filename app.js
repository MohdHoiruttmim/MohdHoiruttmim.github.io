const expand = document.querySelectorAll(".rounded");
const socBtn = expand[2];

socBtn.addEventListener('click', () => {
    for(let i=0; i<3; i++){
        expand[i].classList.toggle('active');
    }
})