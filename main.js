const navToggle = () => {
  const toggler = document.querySelector('.toggle');
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
};

navToggle();

const popUpInfo = {
  title: ['Offenbachgp', 'Spoiled Eggs', 'Classica Tournée', 'Opera Pathway', 'Sing the masters', 'Callas Prize', 'Singing Portfolio'],
  badges: [
    '<li>html</li><li>css</li><li>php</li><li>mysql</li><li>javascript</li>',
    '<li>html</li><li>css</li><li>php</li><li>mysql</li><li>javascript</li>',
    '<li>html</li><li>css</li><li>javascript</li>',
    '<li>html</li><li>css</li><li>javascript</li>',
    '<li>html</li><li>css</li><li>javascript</li>',
    '<li>html</li><li>css</li><li>javascript</li>',
    '<li>html</li><li>css</li>',

  ],
  image: [
    '<img src="images/offenbach.png" alt="Offenbach Grand Prix Homepage">',
    '<img src="images/spoiledeggsdesk.png" alt="Offenbach Grand Prix Homepage">',
    '<img src="images/classicatourneedesk.png" alt="Offenbach Grand Prix Homepage">',
    '<img src="images/operapathwaydesk.png" alt="Offenbach Grand Prix Homepage">',
    '<img src="images/singthemasters.png" alt="Offenbach Grand Prix Homepage">',
    '<img src="images/callasprizedesk.png" alt="Offenbach Grand Prix Homepage">',
    '<img src="images/modinosdesk.png" alt="Offenbach Grand Prix Homepage">',

  ],
  text: [
    'A fully online opera-singing competition, where the audience can comment and applaud, and where the jury comments in full view of the audience.  Automated application process, which includes video and biog upload, as well as an automatically generated contract in the end.',

    'Spoiled Eggs was the original template for 2 projects and those two projects were used to promote Spoiled Eggs.  It is a review site for opera, where people can rage click "applause" or "throwing eggs" and of course comment.',

    'A site meant as an extension of Opera Classica Europa`s Inthega classifieds, which is a platform intended on facilitating touring in Germany.',

    "The advertisement and application process for Opera Classica Europa's Opera Studio program, called the Opera Pathway.",

    'A template intended at hosting music competitions, mostly those that were dedicated to a composer.  The Offenbach GP was such a competition later in time.',

    'The advertisement and application process to enter the Callas Prize competition, which was supposed to take place at the Alte Oper Frankfurt for the finals.  Unfortunately cancelled due to COVID.',

    "My personal singing portfolio and also the first site I ever coded.  In it's initial form it was merely a list, but later I created an interesting, albeit somewhat glitchy, navbar system.",

  ],

  liveButton: [
    '<a href="https://www.offenbachgp.com/" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
    '<a href="https://spoiledeggs.eu5.org/" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
    '<a href="#" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
    '<a href="#" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
    '<a href="#" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
    '<a href="#" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',
    '<a href="https://philipmodinos.ueuo.com" rel=”noopener”>See Live <img src="images/liveIcon.png" alt="Live Icon"></a>',

  ],

  sourceButton: [
    '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
    '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
    '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
    '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
    '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
    '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
    '<a href="#" rel=”noopener”>See Source <img src="images/gitIcon.png" alt="Source Icon"></a>',
  ],

};

function toggle(arrayNumber) {
  const blur = document.getElementById('portfolio');
  blur.classList.toggle('active');
  const blur2 = document.getElementById('popUp');
  blur2.classList.toggle('active');

  document.getElementById('title').innerHTML = popUpInfo.title[arrayNumber];
  document.getElementById('img').innerHTML = popUpInfo.image[arrayNumber];
  document.getElementById('badges').innerHTML = popUpInfo.badges[arrayNumber];
  document.getElementById('text').innerHTML = popUpInfo.text[arrayNumber];
  document.getElementById('live').innerHTML = popUpInfo.liveButton[arrayNumber];
  document.getElementById('source').innerHTML = popUpInfo.sourceButton[arrayNumber];
}

toggle();