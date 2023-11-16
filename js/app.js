// header sticky
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const headerHeight = header.clientHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > headerHeight) {
            header.classList.add('sticky-header');
        } else {
            header.classList.remove('sticky-header');
        }
    });
});
