const navToggle = () => {
  const toggler = document.querySelector('.toggle');
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
};

navToggle();


const popUpInfo = {
  title: ['Offenbachgp','Spoiled Eggs'],
  image: ['images/offenbach.png','images/spoiledeggs.png'],
  text: ['Lorem1','Lorem2']
};

function toggle(arrayNumber){
  var blur = document.getElementById('portfolio');
  blur.classList.toggle('active');
  var blur = document.getElementById('popUp');
  blur.classList.toggle('active');
  
  document.getElementById('title').innerHTML = popUpInfo.title[arrayNumber];
}

