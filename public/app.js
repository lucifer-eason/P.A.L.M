// Colourway switcher
const cwImg = document.getElementById('cw-img');
document.querySelectorAll('.cw-swatches button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cw-swatches button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    cwImg.classList.add('swap');
    setTimeout(() => {
      cwImg.src = `/img/${btn.dataset.img}.webp`;
      document.getElementById('cw-name').textContent = btn.dataset.name;
      document.getElementById('cw-desc').textContent = btn.dataset.desc;
      cwImg.onload = () => cwImg.classList.remove('swap');
    }, 300);
  });
});

// Social platform tabs
document.querySelectorAll('.platforms button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const p = btn.dataset.p;
    document.querySelectorAll('.platforms button').forEach((b) => b.classList.toggle('active', b === btn));
    document.querySelectorAll('.pane').forEach((el) => el.classList.toggle('active', el.dataset.pane === p));
    document.querySelectorAll('.plan').forEach((el) => el.classList.toggle('active', el.dataset.plan === p));
  });
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.persona, .price-card, .compare, .strategy article, .channels article, .node, .cal div, .features article')
  .forEach((el) => { el.classList.add('in'); io.observe(el); });
