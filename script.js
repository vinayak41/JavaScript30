const cards = [
  {
    title: "Drum Kit",
    image: "/images/drum-kit.png",
    url: "/drum-kit",
  },
];

const cardsWrapperElement = document.querySelector(".cards-wrapper");
console.log(cardsWrapperElement);

cards.forEach((card) => {
  const cardElement = document.createElement("a");
  cardElement.classList.add("card");
  cardElement.setAttribute("href", card.url);
  cardElement.innerHTML = `<p>${card.title}</p> <div class="image-wrapper" ><img src="${card.image}" /></div>`;
  cardsWrapperElement.appendChild(cardElement);
});
