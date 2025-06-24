document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.cardDistingue');
  const trigger = document.getElementById('distingue-title');

  function showCardsIfTitleVisible() {
    const triggerTop = trigger.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.95;

    if (triggerTop < triggerBottom) {
      cards.forEach(card => card.classList.add('show'));
      window.removeEventListener('scroll', showCardsIfTitleVisible);
    }
  }

  window.addEventListener('scroll', showCardsIfTitleVisible);
  showCardsIfTitleVisible();
});