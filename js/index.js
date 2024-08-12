const sobre = document.querySelector('#sobre');
const sobreAbertura = document.querySelector('#sobre_copia');

sobre.addEventListener('click',()=>{
    sobreAbertura.style.transform = "rotate(0)";
    sobreAbertura.style.top = "0px"
    setTimeout(()=>{
        window.location.href = "./html/secondPage.html"
    },1000)
});
