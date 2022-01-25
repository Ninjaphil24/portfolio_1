const navToggle = () => {
  const burger = document.querySelector('.toggle');
  const toggler = document.querySelector('.toggle');
  burger.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
};

navToggle();