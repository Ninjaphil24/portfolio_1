const navToggle = () => {
  const toggler = document.querySelector('.toggle');
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
};

navToggle();

function toggle(){
  var blur = document.getElementById('portfolio');
  blur.classList.toggle('active');
  var blur = document.getElementById('popUp');
  blur.classList.toggle('active');
}