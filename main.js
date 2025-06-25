// JS básico para la landing page

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn-custom');
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('¡Gracias por visitar la landing page!');
        });
    }
});
