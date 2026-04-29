function toggleType(el) {
  el.closest('.type-toggle').querySelectorAll('.type-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
}

document.querySelectorAll('.cat-pill, .filter-tab').forEach(el => {
  el.addEventListener('click', function() {
    this.closest('.inner, .filter-tabs').querySelectorAll('.cat-pill, .filter-tab').forEach(e => e.classList.remove('active'));
    this.classList.add('active');
  });
});
