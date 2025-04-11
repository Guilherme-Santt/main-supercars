// INITTAB TOP 5 MAIS VALORIZADOS
(function initTabNav() {
    const listImg = document.querySelectorAll('img')
    const ativarTexto = document.querySelectorAll('section')

    if(listImg.length && ativarTexto.length) {    
        ativarTexto[0].classList.remove('dNone');
        function activeTab(index) {
            ativarTexto.forEach((section) => {
                section.classList.add('dNone');
            });
            ativarTexto[index].classList.remove('dNone');
    }

    listImg.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => { activeTab(index);
        });
    });
}
})();

// TRANSIÇÃO DIV FÓRMULA 1
(function transitionF1(){

    const f1 = document.querySelector('#f1');
    f1.addEventListener('mouseover', (element) => {
        element.target.classList.add('fade-out');
        setTimeout(() => {
            element.target.src = "https://imagenes.elpais.com/resizer/v2/ZWA64GNWGYVZCM5R66ZJLYAJVU.jpg?auth=357ce3dcc0bef353917f6af9e92d8263566f168d4c6c97add92df9484ab3298d&width=1960&height=1103&smart=true";
            element.target.classList.remove('fade-out'); 
            element.target.classList.add('fade-in'); 

            setTimeout(() => {
                element.target.classList.remove('fade-in');
            }, 200);
        },200);
    });

    f1.addEventListener('mouseleave', (element) => {
        element.target.classList.add('fade-out');
        setTimeout(() => {
            element.target.src = "https://s2-autoesporte.glbimg.com/8AoGE-Jr2nFSrsfxSm8DT7WayQk=/0x0:1080x645/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/Z/F/C923T1TlORxpzmAb8lAg/ferraro.jpg";
            element.target.classList.remove('fade-out'); 
            element.target.classList.add('fade-in'); 

            setTimeout(() => {
                element.target.classList.remove('fade-in');
            }, 50);
        },50);
    });
}())

// TRANSIÇÃO IMAGENS BUGGATI
(function passBugati() {
    const btnAnt = document.querySelector('#antBtn');
    const btnProx = document.querySelector('#proxBtn');
    let imgBugatti = document.querySelector('#img-bugatti');
    
    let linkImgs = [
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/BUGATTI_Tourbillon_16.jpg?w=880",
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/BUGATTI_Tourbillon_25.jpg?w=880",
        "https://carro.blog.br/wp-content/uploads/2024/06/Bugatti-Tourbillon-7-jpg.webp",
        "https://cdn.motor1.com/images/mgl/RqY32m/s1/bugatti-tourbillon.jpg",
    ]
    
    function alterarImg(){
        setTimeout(() => imgBugatti.src = linkImgs[currentIndex], 100)
    }
    
    let currentIndex = 0;
    btnProx.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= linkImgs.length) {
            currentIndex = 0;
        }
        alterarImg()
    });
    
    btnAnt.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = linkImgs.length - 1;
        }
        alterarImg()
    });
    
}())