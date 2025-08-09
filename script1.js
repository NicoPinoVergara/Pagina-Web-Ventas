document.addEventListener('DOMContentLoaded', function () {
    const btnPaginaWeb2 = document.querySelector('button.btn-pequeno');
    if (btnPaginaWeb2) {
        btnPaginaWeb2.style.backgroundColor = '#4a90e2';
        btnPaginaWeb2.style.color = 'white';
        btnPaginaWeb2.style.border = 'none';
        btnPaginaWeb2.style.padding = '0.3rem 0.8rem';
        btnPaginaWeb2.style.borderRadius = '30px';
        btnPaginaWeb2.style.fontSize = '0.85rem';
        btnPaginaWeb2.style.cursor = 'pointer';
        btnPaginaWeb2.onmouseover = function () {
            btnPaginaWeb2.style.backgroundColor = '#3a7bbd';
        };
        btnPaginaWeb2.onmouseout = function () {
            btnPaginaWeb2.style.backgroundColor = '#4a90e2';
        };
    }
});