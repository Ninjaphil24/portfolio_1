const navToggle = () => {
  const toggler = document.querySelector('.toggle');
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
};

navToggle();


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".toggle").style.top = "0";
  } else {
    document.querySelector(".toggle").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

  function myFunction() {
  var x = document.getElementById("pdf");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

  //   var counter = 1;

  // function counterClick(radioNum){
  //   counter = radioNum;
  // };

  //   setInterval(function(){
  //     document.getElementById('radio'+ counter).checked = true;
  //     counter++;
  //     if(counter>6){
  //         counter=1;
  //     }
  // },3000);


const popUpInfo = [{
  title: 'Offenbach Grand Prix Singing Competition',
  badges: '<li>html</li><li>css</li><li>php</li><li>ajax</li><li>jquery</li><li>mysql</li><li>javascript</li>',
  image: '<img src="images/offenbach.png" alt="Offenbach Grand Prix Homepage">',
  text: 'A fully online opera-singing competition, where the audience can comment and applaud, and where the jury comments in full view of the audience.  Automated application process, which includes video and biog upload, as well as an automatically generated contract in the end.',
  liveButton: '<a href="http://offenbachdemo.eu5.org/" rel=”noopener” target="_blank">See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/offenbachgp" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Spoiled Eggs',
  badges: '<li>html</li><li>css</li><li>php</li><li>ajax</li><li>jquery</li><li>mysql</li><li>javascript</li>',
  image: '<img src="images/spoiledeggsdesk.png" alt="Spoiled Eggs">',
  text: 'Spoiled Eggs was the original template for 2 projects and those two projects were used to promote Spoiled Eggs.  It is a review site for opera, where people can rage click "applause" or "throwing eggs" and of course comment.',
  liveButton: '<a href="https://spoiledeggs.eu5.org/" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/spoiledeggs" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Symfony Movie App',
  badges: '<li>html</li><li>tailwind</li><li>php</li><li>symfony</li><li>twig</li><li>mysql</li><li>javascript</li>',
  image: '<img src="images/symfony.png" alt="Symfony Movies">',
  text: 'A study in the use of the Symfony Framework for php, in this case a basic setup for a movie review site, based on a tutorial by Code with Dary.',
  liveButton: '<a href="http://symfonymovie.herokuapp.com/movies" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/symfonymovies" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Laravel Demo',
  badges: '<li>html</li><li>css</li><li>php/laravel</li><li>mysql</li>',
  image: '<img src="images/laragigs.png" alt="Laravel Demo">',
  text: 'A demo of full CRUD functionality using Laravel.  Note that the demo version does not allow for chmod 777 on deploy, therefore uploading logos is not possible, even though the app can do it.  Tutorial by Brad Traversy.',
  liveButton: '<a href="https://laragigsdemo.herokuapp.com/" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/laragigs" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Classica Tournée',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/classicatourneedesk.png" alt="Classica Tournée">',
  text: 'A site meant as an extension of Opera Classica Europa`s Inthega classifieds, which is a platform intended on facilitating touring in Germany.',
  liveButton: '<a href="https://ninjaphil24.github.io/ocetournee/" target="_blank" rel="noopener">See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/ocetournee" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Weather App',
  badges: '<li>html</li><li>css</li><li>javascript</li><li>json</li><li>api</li>',
  image: '<img src="images/weather.png" alt="Weather App">',
  text: "A weather app meant as an exercise in json and api.",
  liveButton: '<a href="https://ninjaphil24.github.io/OdinWeatherApp/" target="_blank" rel="noopener">See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/OdinWeatherApp" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Opera Pathway',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/operapathwaydesk.png" alt="Opera Pathway to performance">',
  text: "The advertisement and application process for Opera Classica Europa's Opera Studio program, called the Opera Pathway.",
  liveButton: '<a href="https://ninjaphil24.github.io/pathwayperformance/" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/pathwayperformance" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Local Storage (Add Student)',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/localstorage.png" alt="Local Storage">',
  text: "An exercise in the use of local storage in browsers.",
  liveButton: '<a href="https://ninjaphil24.github.io/LocalStorageStudentList/" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/LocalStorageStudentList" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Sing the masters',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/singthemasters.png" alt="Sing the masters">',
  text: "A template intended at hosting music competitions, mostly those that were dedicated to a composer.  The Offenbach GP was such a competition later in time.",
  liveButton: '<a href="https://singthemasters.ueuo.com/" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/singthemasters" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Tic Tac Toe',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/tictactoe.png" alt="Tic Tac Toe">',
  text: 'A javascript exercise for a basic game of tic tac toe.',
  liveButton: '<a href="https://ninjaphil24.github.io/Odin-TicTacToe/" target="_blank" rel="noopener">See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/Odin-TicTacToe" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Three js',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/threejs.png" alt="Three js">',
  text: 'A demo of a possible portfolio site using three.js.',
  liveButton: '<a href="https://ninjaphil24.github.io/threedjavascript/" target="_blank" rel="noopener">See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/threedjavascript" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Calculator',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/calculator.png" alt="Calculator">',
  text: 'A javascript exercise for creating a Calculator with javascript.',
  liveButton: '<a href="https://ninjaphil24.github.io/Calculator/" target="_blank" rel="noopener">See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/Calculator" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Etch-a-Sketch',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/etchasketch.png" alt="Etch-a-Sketch">',
  text: 'A javascript exercise in Etch-a-Sketch using javascript.',
  liveButton: '<a href="https://ninjaphil24.github.io/Odin-Etch-a-Sketch/" target="_blank" rel="noopener" >See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/Odin-Etch-a-Sketch" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Angular to do list',
  badges: '<li>html</li><li>css</li><li>javascript</li><li>typescript</li><li>angular</li>',
  image: '<img src="images/angular.png" alt="Angular">',
  text: 'Tutorial in Angular by Brad Traversy.  Not deployed.',
  liveButton: '<a href="">See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/angular-crash" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Angular and Node.js',
  badges: '<li>html</li><li>css</li><li>bootstrap</li><li>javascript</li><li>typescript</li><li>angular</li><li>node.js</li><li>mysql</li>',
  image: '<img src="images/angularnode.png" alt="Angular">',
  text: 'Tutorial in Angular and Node.js by Num of Code.  Not deployed.',
  liveButton: '<a href="https://angularnode-rho.vercel.app/" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/angularnode" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Ionic Weather Forecast',
  badges: '<li>html</li><li>css</li><li>javascript</li><li>typescript</li><li>angular</li><li>ionic</li>',
  image: '<img src="images/ioniclandscape.png" alt="Angular">',
  text: 'Tutorial in Ionic by CodeXpression.  Not deployed.',
  liveButton: '<a href="https://ionicweather.vercel.app/landing" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/ionicweather" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Webpack',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/webpack.png" alt="Webpack">',
  text: 'Tutorial in Webpack by Swashbuckling with Code.  Not deployed.',
  liveButton: '<a href="#portfolio">See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/webpack3" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Coding Portfolio',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/codingportfolio.png" alt="Portfolio">',
  text: 'My personal coding portfolio, as initiated during my time at microverse.  Portfolio includes some interesting css and javascript in the "portfolio" section.',
  liveButton: '<a href="https://ninjaphil24.github.io/portfolio_1/" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/portfolio_1" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Singing Porfolio',
  badges: '<li>html</li><li>css</li>',
  image: '<img src="images/modinosdesk.png" alt="Philip Modinos">',
  text: "My personal singing portfolio and also the first site I ever coded.  In it's initial form it was merely a list, but later I created an interesting, albeit somewhat glitchy, navbar system.",
  liveButton: '<a href="https://philipmodinos.ueuo.com/" target="_blank" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="https://github.com/Ninjaphil24/singingportfolio" target="_blank" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
}];

function toggle(arrayNumber) {
  const blur = document.getElementById('portfolio');
  blur.classList.toggle('active');
  const blur2 = document.getElementById('popUp');
  blur2.classList.toggle('active');

  document.getElementById('title').innerHTML = popUpInfo[arrayNumber].title;
  document.getElementById('img').innerHTML = popUpInfo[arrayNumber].image;
  document.getElementById('badges').innerHTML = popUpInfo[arrayNumber].badges;
  document.getElementById('text').innerHTML = popUpInfo[arrayNumber].text;
  document.getElementById('live').innerHTML = popUpInfo[arrayNumber].liveButton;
  document.getElementById('source').innerHTML = popUpInfo[arrayNumber].sourceButton;
}

const click1 = document.getElementById('offenbach');
click1.addEventListener('click', () => { toggle(0); });

const click2 = document.getElementById('spoiledeggs');
click2.addEventListener('click', () => { toggle(1); });

const click3 = document.querySelector('.site1p5');
click3.addEventListener('click', () => { toggle(2); });

const click4 = document.querySelector('.site1p6');
click4.addEventListener('click', () => { toggle(3); });

const click5 = document.querySelector('.site2');
click5.addEventListener('click', () => { toggle(4); });

const click6 = document.querySelector('.site2p5');
click6.addEventListener('click', () => { toggle(5); });

const click7 = document.querySelector('.site3');
click7.addEventListener('click', () => { toggle(6); });

const click8 = document.querySelector('.site3p5');
click8.addEventListener('click', () => { toggle(7); });

const click9 = document.querySelector('.site4');
click9.addEventListener('click', () => { toggle(8); });

const click10 = document.querySelector('.site4p5');
click10.addEventListener('click', () => { toggle(9); });

const click11 = document.querySelector('.site5');
click11.addEventListener('click', () => { toggle(10); });

const click12 = document.querySelector('.site5p5');
click12.addEventListener('click', () => { toggle(11); });

const click13 = document.querySelector('.site6');
click13.addEventListener('click', () => { toggle(12); });

const click14 = document.querySelector('.site7');
click14.addEventListener('click', () => { toggle(13); });

const click15 = document.querySelector('.site7p1');
click15.addEventListener('click', () => { toggle(14); });

const click16 = document.querySelector('.site7p2');
click16.addEventListener('click', () => { toggle(15); });

const click17 = document.querySelector('.site8');
click17.addEventListener('click', () => { toggle(16); });

const click18 = document.querySelector('.site9');
click18.addEventListener('click', () => { toggle(17); });

const click19 = document.querySelector('.site10');
click19.addEventListener('click', () => { toggle(18); });

const form = document.getElementById('form');
const mail = document.getElementById('mail');
const errorElement = document.getElementById('error');

function saveLocal() {
  const callName = document.getElementById('name').value;
  const callEmail = document.getElementById('mail').value;
  const storeData = { name: callName, email: callEmail };
  const storeString = JSON.stringify(storeData);
  localStorage.setItem('stored', storeString);
}

form.addEventListener('submit', (e) => {
  const messages = [];
  if (mail.value.match(/([A-Z])/g)) {
    messages.push('No Capitals allowed!');
    mail.classList.toggle('error');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join(', ');
  }
  saveLocal();
});

const storeParse = JSON.parse(localStorage.getItem('stored'));
document.getElementById('name').value = storeParse.name;
document.getElementById('mail').value = storeParse.email;
