const backToTopButton = document.querySelector('.back-to-top')

const backToTop = () => {
    if (window.scrollY >= 100) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
function CopyTexto(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    } catch (e) {
        alert("Falha ao copiar o texto: " + e);
    }
};