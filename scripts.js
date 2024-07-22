// Toggle navbar icon

let menuIcon = document.querySelector('#bar-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Close navbar when a menu item is clicked
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});

// Scroll Section Active link

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < (offset + height)){
            navLinks.forEach.apply(link => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Software Development Student', 'Web Designer', 'Web Developer', 'Logo and UI/UX Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});

// Submit form 
function submitForm() {
    let frm = document.getElementsByName('contact-form')[0];
    frm.submit(); // Submit the form
    frm.reset(); // Reset all form data
}
