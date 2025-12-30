import config from './config.js';

function setActive(route){
  document.querySelectorAll('.app-badge').forEach(a=>{
    a.classList.toggle('active', a.dataset.route===route);
  });
}

function render(route){
  const app = document.getElementById('app');
  const mod = (config.MODULES[route]||config.MODULES.chs);
  const src = mod.src;
  app.innerHTML = `<iframe class="module-frame" src="${src}" title="${mod.name}"></iframe>`;
  setActive(route);
}

export function initRouter(){
  function getRoute(){
    const hash = (location.hash||'').toLowerCase();
    if(hash.startsWith('#/nps')) return 'nps';
    return 'chs';
  }
  function onRoute(){ render(getRoute()); }
  window.addEventListener('hashchange', onRoute);
  onRoute();
}
