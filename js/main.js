(function(){
  const body=document.body, header=document.querySelector('.linia-header'), toggle=document.querySelector('.linia-menu-toggle'), nav=document.querySelector('.linia-nav');
  const closeMenu=()=>{if(!toggle||!nav)return;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Ouvrir le menu');nav.classList.remove('is-open');body.classList.remove('nav-open')};
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Ouvrir le menu':'Fermer le menu');nav.classList.toggle('is-open',!open);body.classList.toggle('nav-open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()})}
  const onScroll=()=>header&&header.classList.toggle('is-scrolled',window.scrollY>16);onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const items=document.querySelectorAll('.reveal-on-scroll');
  if(reduce||!('IntersectionObserver'in window)){items.forEach(el=>el.classList.add('is-visible'));return}
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}}),{threshold:.16,rootMargin:'0px 0px -40px'});items.forEach(el=>io.observe(el));
})();
