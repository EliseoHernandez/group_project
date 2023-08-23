const cards = document.querySelectorAll('.card__content');
const cardContainer = document.querySelector('.card');

let currentCardIndex = 0;

cardContainer.addEventListener('wheel', event => {
  event.preventDefault();

  currentCardIndex -= Math.sign(event.deltaY);
  currentCardIndex = Math.max(0, Math.min(currentCardIndex, cards.length - 1));

  const cardWidth = cards[0].clientWidth + 50; // assuming all cards have the same width
  const translateX = -currentCardIndex * cardWidth;

  cards.forEach((card, index) => {
    card.style.transform = `translateX(${translateX}px)`;
  });
});
