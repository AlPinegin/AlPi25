/* filepath: script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('#main-nav') ? document.querySelector('#main-nav').offsetHeight : 0), // Adjust for fixed nav height if implemented
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Make navigation fixed on scroll
    const nav = document.getElementById('main-nav');
    const header = document.getElementById('home'); // Or the element before the nav
    let navTop = nav.offsetTop;

    function fixNav() {
        if (window.scrollY >= navTop) {
            nav.classList.add('fixed-nav');
            // Add padding to body or header to prevent content jump
            // document.body.style.paddingTop = nav.offsetHeight + 'px';
        } else {
            nav.classList.remove('fixed-nav');
            // document.body.style.paddingTop = 0;
        }
    }

    // Add a class to style the fixed nav in CSS
    // .fixed-nav {
    //     position: fixed;
    //     top: 0;
    //     width: 100%;
    //     z-index: 1000;
    //     box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    // }

    window.addEventListener('scroll', fixNav);
    // Also call on load in case user refreshes while scrolled down
    fixNav();
});