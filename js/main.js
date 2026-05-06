/* =============================================
   TechHub — main.js
   by Mudassir Afridi
   Simple, clean, no fluff
============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Fade-up scroll animations --- */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('show');
        }, i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });

  /* --- Active nav link --- */
  var page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      if (a.dataset.nav === page) a.classList.add('active');
    });
  }

}); /* end DOMContentLoaded */

/* --- Mobile nav toggle (global, used inline) --- */
function toggleMob() {
  var el = document.getElementById('mobNav');
  if (el) el.classList.toggle('open');
}

/* --- FAQ accordion --- */
function toggleFAQ(el) {
  var item = el.parentElement;
  document.querySelectorAll('.faq-item.open').forEach(function (o) {
    if (o !== item) o.classList.remove('open');
  });
  item.classList.toggle('open');
}

/* --- Portfolio filter --- */
function filterWork(cat, btn) {
  document.querySelectorAll('.f-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');
  document.querySelectorAll('.w-card').forEach(function (c) {
    c.style.display = (cat === 'all' || c.dataset.cat === cat) ? '' : 'none';
  });
}

/* --- Contact form --- */
function sendForm() {
  var n = document.getElementById('f-name');
  var e = document.getElementById('f-email');
  var m = document.getElementById('f-msg');
  if (!n || !e || !m) return;
  if (!n.value.trim() || !e.value.trim() || !m.value.trim()) {
    alert('Please fill in your name, email and message.');
    return;
  }
  document.getElementById('f-form').style.display = 'none';
  document.getElementById('f-success').style.display = 'block';
}
