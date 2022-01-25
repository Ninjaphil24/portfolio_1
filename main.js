const navToggle = () => {
  const toggler = document.querySelector('.toggle');
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
};

navToggle();