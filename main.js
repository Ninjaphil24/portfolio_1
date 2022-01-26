const navToggle = () => {
  const toggler = document.querySelector('.toggle');
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
};

navToggle();

const popUpInfo = [{
  title: 'Offenbach',
  badges: '<li>html</li><li>css</li><li>php</li><li>mysql</li><li>javascript</li>',
  image: '<img src="images/offenbach.png" alt="Offenbach Grand Prix Homepage">',
  text: 'A fully online opera-singing competition, where the audience can comment and applaud, and where the jury comments in full view of the audience.  Automated application process, which includes video and biog upload, as well as an automatically generated contract in the end.',
  liveButton: '<a href="https://www.offenbachgp.com/" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Spoiled Eggs',
  badges: '<li>html</li><li>css</li><li>php</li><li>mysql</li><li>javascript</li>',
  image: '<img src="images/spoiledeggsdesk.png" alt="Spoiled Eggs">',
  text: 'Spoiled Eggs was the original template for 2 projects and those two projects were used to promote Spoiled Eggs.  It is a review site for opera, where people can rage click "applause" or "throwing eggs" and of course comment.',
  liveButton: '<a href="https://spoiledeggs.eu5.org/" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Classica Tournée',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/classicatourneedesk.png" alt="Classica Tournée">',
  text: 'A site meant as an extension of Opera Classica Europa`s Inthega classifieds, which is a platform intended on facilitating touring in Germany.',
  liveButton: '<a href="#" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Opera Pathway',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/operapathwaydesk.png" alt="Offenbach Grand Prix Homepage">',
  text: "The advertisement and application process for Opera Classica Europa's Opera Studio program, called the Opera Pathway.",
  liveButton: '<a href="#" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Sing the masters',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/singthemasters.png" alt="Sing the Masters">',
  text: 'A template intended at hosting music competitions, mostly those that were dedicated to a composer.  The Offenbach GP was such a competition later in time.',
  liveButton: '<a href="#" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Callas Prize',
  badges: '<li>html</li><li>css</li><li>javascript</li>',
  image: '<img src="images/callasprizedesk.png" alt="Callas Grand Prix">',
  text: 'The advertisement and application process to enter the Callas Prize competition, which was supposed to take place at the Alte Oper Frankfurt for the finals.  Unfortunately cancelled due to COVID.',
  liveButton: '<a href="#" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
},
{
  title: 'Singing Porfolio',
  badges: '<li>html</li><li>css</li>',
  image: '<img src="images/modinosdesk.png" alt="Philip Modinos">',
  text: "My personal singing portfolio and also the first site I ever coded.  In it's initial form it was merely a list, but later I created an interesting, albeit somewhat glitchy, navbar system.",
  liveButton: '<a href="#" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
  sourceButton: '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
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

const click3 = document.querySelector('.site2');
click3.addEventListener('click', () => { toggle(2); });

const click4 = document.querySelector('.site3');
click4.addEventListener('click', () => { toggle(3); });

const click5 = document.querySelector('.site4');
click5.addEventListener('click', () => { toggle(4); });

const click6 = document.querySelector('.site5');
click6.addEventListener('click', () => { toggle(5); });

const click7 = document.querySelector('.site6');
click7.addEventListener('click', () => { toggle(6); });
