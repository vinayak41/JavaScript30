const cards = [
  {
    title: "Drum Kit",
    image: "/images/drum-kit.png",
    url: "/drum-kit",
  },
  {
    title: "Clock",
    image: "/images/clock.png",
    url: "/clock",
  },
];

const cardsWrapperElement = document.querySelector(".cards-wrapper");
console.log(cardsWrapperElement);

cards.forEach((card, index) => {
  const cardElement = document.createElement("a");
  cardElement.classList.add("card");
  cardElement.setAttribute("href", card.url);
  cardElement.innerHTML = `<p>${
    index + 1 + ". " + card.title
  }</p> <div class="image-wrapper" ><img src="${card.image}" /></div>`;
  cardsWrapperElement.appendChild(cardElement);
});
