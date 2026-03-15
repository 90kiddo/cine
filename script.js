'use strict';



const movies = [
  { title:"Ember Falls",    year:"2024", genre:"Drama",    rating:"8.4", badge:"NEW", img:"https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"Iron Veil",      year:"2024", genre:"Action",   rating:"7.9", badge:"HOT", img:"https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"Neon Requiem",   year:"2024", genre:"Sci-Fi",   rating:"9.0", badge:"#1",  img:"https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"The Last Hunt",  year:"2023", genre:"Thriller", rating:"8.1", badge:"",    img:"https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"Starfall",       year:"2024", genre:"Sci-Fi",   rating:"8.7", badge:"NEW", img:"https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"Crimson Tide",   year:"2023", genre:"Drama",    rating:"7.6", badge:"",    img:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"Phantom Road",   year:"2024", genre:"Action",   rating:"8.2", badge:"HOT", img:"https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"After the Rain", year:"2024", genre:"Romance",  rating:"7.8", badge:"NEW", img:"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"Void Walker",    year:"2023", genre:"Horror",   rating:"8.5", badge:"",    img:"https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"City of Glass",  year:"2024", genre:"Thriller", rating:"8.0", badge:"NEW", img:"https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"Dark Meridian",  year:"2024", genre:"Sci-Fi",   rating:"8.3", badge:"",    img:"https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
  { title:"The Reckoning",  year:"2023", genre:"Action",   rating:"7.7", badge:"HOT", img:"https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" },
];

const landscapes = [
  { title:"Ember Falls",   prog:65, img:"https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop" },
  { title:"Iron Veil",     prog:30, img:"https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop" },
  { title:"Neon Requiem",  prog:80, img:"https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop" },
  { title:"The Last Hunt", prog:10, img:"https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop" },
  { title:"Starfall",      prog:55, img:"https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop" },
  { title:"City of Glass", prog:20, img:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop" },
];

const categories = [
  { name:"Action",    img:"https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=400", color:"rgba(232,77,77,0.52)"   },
  { name:"Drama",     img:"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400", color:"rgba(77,120,232,0.52)"  },
  { name:"Sci-Fi",    img:"https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400", color:"rgba(77,210,200,0.38)"  },
  { name:"Thriller",  img:"https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400", color:"rgba(180,77,232,0.48)"  },
  { name:"Comedy",    img:"https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=400", color:"rgba(232,200,77,0.48)"  },
  { name:"Romance",   img:"https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400", color:"rgba(232,100,160,0.48)" },
  { name:"Horror",    img:"https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=400", color:"rgba(12,12,18,0.65)"    },
  { name:"Animation", img:"https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=400", color:"rgba(232,150,77,0.48)"  },
];

const heroData = [
  {
    title: "THE <em>LAST</em><br>HORIZON",
    desc:  "A lone astronaut stranded beyond known space must forge an unlikely alliance with a rogue AI to find her way home — before time runs out for both worlds."
  },
  {
    title: "IRON <em>VEIL</em>",
    desc:  "An ex-soldier uncovers a government conspiracy that blurs the line between friend and foe in a city on the brink of revolution."
  },
  {
    title: "NEON <em>REQUIEM</em>",
    desc:  "In the rain-soaked streets of 2147, a jazz musician holds the key to stopping a synthetic plague — if he can survive the night."
  },
];



const qs = (sel, ctx) => (ctx || document).querySelector(sel);
const qa = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}



function makeCard(m) {
  return `
    <div class="card">
      <div class="card-thumb">
        <img src="${m.img}" alt="${m.title}" loading="lazy"/>
        ${m.badge ? `<div class="card-badge">${m.badge}</div>` : ''}
        <div class="card-rating">&#9733; ${m.rating}</div>
        <div class="overlay">
          <div class="card-play-btn">
            <svg width="14" height="14" fill="#07090f" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${m.title}</div>
        <div class="card-sub">${m.year} &middot; ${m.genre}</div>
      </div>
    </div>`;
}

function makeWideCard(m) {
  return `
    <div class="card wide">
      <div class="card-thumb">
        <img src="${m.img}" alt="${m.title}" loading="lazy"/>
        <div class="overlay" style="opacity:1;background:linear-gradient(to top,rgba(7,9,15,0.80) 0%,transparent 65%);">
          <div style="width:100%;">
            <div style="font-size:12px;font-weight:600;margin-bottom:7px;">${m.title}</div>
            <div style="background:rgba(255,255,255,0.14);border-radius:3px;height:3px;width:100%;">
              <div style="background:var(--accent);height:100%;width:${m.prog}%;border-radius:3px;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function makeCatCard(c) {
  return `
    <div class="cat-card">
      <img src="${c.img}" alt="${c.name}" loading="lazy"/>
      <div class="cat-card-overlay" style="background:${c.color}">${c.name.toUpperCase()}</div>
    </div>`;
}



function renderRows() {
  qs('#row-trending').innerHTML = shuffle(movies).map(makeCard).join('');
  qs('#row-new').innerHTML      = shuffle(movies).map(makeCard).join('');
  qs('#row-top').innerHTML      = [...movies]
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    .map(makeCard).join('');
  qs('#row-continue').innerHTML = landscapes.map(makeWideCard).join('');
  qs('#catGrid').innerHTML      = categories.map(makeCatCard).join('');
}





/**
 * @param {HTMLElement} rowEl   
 * @param {number}      intervalMs -
 */
function initRowAutoScroll(rowEl, intervalMs) {
  let paused = false;
  let timer  = null;


  function oneCardWidth() {
    const card = rowEl.querySelector('.card');
    if (!card) return 188;
    const cardRect = card.getBoundingClientRect();
    const gap      = parseFloat(window.getComputedStyle(rowEl).gap) || 14;
    return Math.round(cardRect.width + gap);
  }

  function tick() {
    if (paused) return;

    const step      = oneCardWidth();
    const maxScroll = rowEl.scrollWidth - rowEl.clientWidth;

    if (rowEl.scrollLeft >= maxScroll - step * 0.6) {
     
      rowEl.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      rowEl.scrollBy({ left: step, behavior: 'smooth' });
    }
  }

  function start() { stop(); timer = setInterval(tick, intervalMs); }
  function stop()  { if (timer) { clearInterval(timer); timer = null; } }

  start();


  rowEl.addEventListener('mouseenter', () => { paused = true;  stop();  });
  rowEl.addEventListener('mouseleave', () => { paused = false; start(); });

 
  rowEl.addEventListener('touchstart', () => { paused = true;  stop();  }, { passive: true });
  rowEl.addEventListener('touchend',   () => {
    paused = false;
    setTimeout(start, 1500);
  }, { passive: true });


  const wrapper = rowEl.closest('.row-wrapper');
  if (wrapper) {
    wrapper.querySelectorAll('.row-arrow').forEach(btn => {
      btn.addEventListener('mouseenter', () => { paused = true;  stop();  });
      btn.addEventListener('mouseleave', () => { paused = false; start(); });
    });
  }
}

function initAllRowAutoScrolls() {
 
  const configs = [
    { id: 'row-trending', delay:    0, interval: 1800 },
    { id: 'row-new',      delay:  650, interval: 2000 },
    { id: 'row-top',      delay: 1300, interval: 1900 },
    { id: 'row-continue', delay: 1950, interval: 2100 },
  ];

  configs.forEach(({ id, delay, interval }) => {
    const row = qs('#' + id);
    if (!row) return;
    setTimeout(() => initRowAutoScroll(row, interval), delay);
  });
}



function scrollRow(btn, dir) {
  const row  = btn.closest('.row-wrapper').querySelector('.row');
  const card = row.querySelector('.card');
  if (!card) return;
  const step = Math.round(
    card.getBoundingClientRect().width +
    (parseFloat(window.getComputedStyle(row).gap) || 14)
  );
  row.scrollBy({ left: dir * step, behavior: 'smooth' });
}
window.scrollRow = scrollRow;



function initNavbar() {
  const nav = qs('#navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 48);
  }, { passive: true });
}



function initMobileMenu() {
  const hamburger  = qs('#hamburger');
  const mobileMenu = qs('#mobileMenu');
  if (!hamburger || !mobileMenu) return;

  function open() {
    mobileMenu.style.display = 'flex';
    requestAnimationFrame(() => mobileMenu.classList.add('open'));
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { mobileMenu.style.display = 'none'; }, 310);
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? close() : open();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  window.closeMobileMenu = close;
}



function setGenre(el) {
  qa('.genre-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}
window.setGenre = setGenre;



function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  qa('[data-section]').forEach(s => obs.observe(s));
}



document.addEventListener('DOMContentLoaded', () => {
  renderRows();         
  initNavbar();        
  initMobileMenu();     
  initReveal();        
  initAllRowAutoScrolls();
});