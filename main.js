const navToggle = () => {
    const burger = document.querySelector('.mobile');
    const toggler = document.querySelector('.toggle');
    const navbuttons = document.querySelector('.active desktop ul li a')
    
    burger.addEventListener('click', () => {
        toggler.classList.toggle('active');
        navbuttons.classList.toggle('active');
    });
}

navToggle();