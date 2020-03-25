document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('.menu-btn');
    menu.addEventListener('click', function() {
        document.querySelectorAll('*[class^="menu"]').forEach(function (e) {
            e.classList.toggle('show');
        })
    })
})
