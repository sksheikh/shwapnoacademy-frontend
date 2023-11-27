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

// mobile nav
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    var barsButton = document.getElementById('id-bars');
    var mobileNav = document.getElementById('mobile-nav');

    // Add a click event listener to the bars button
    barsButton.addEventListener('click', function () {
        // Toggle the visibility of the mobile navigation
        mobileNav.classList.toggle('visible');
    });
});
