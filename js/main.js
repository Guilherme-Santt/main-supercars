// Ferrari
(function initTabNav() {
    const listImg = document.querySelectorAll('img')
    const ativarTexto = document.querySelectorAll('section')

    if(listImg.length && ativarTexto.length) {
        ativarTexto[0].classList.remove('textSection');

    function activeTab(index) {
        ativarTexto.forEach((section) => {
            section.classList.add('textSection');
        });
        ativarTexto[index].classList.remove('textSection');
    }

    listImg.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => { activeTab(index);
        });
    });
    }
})();