document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle'); // Use a class instead of ::before
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the mobile navigation menu after clicking a link
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
            header.classList.add('sticky');
            footer.classList.add('sticky');
        } else {
            header.classList.remove('shrink');
            header.classList.remove('sticky');
            footer.classList.remove('sticky');
        }
    });
});
