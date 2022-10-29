const clock = document.querySelector(".clock");
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

const updateClock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHandDegree =
    (((hours + (minutes + seconds / 60) / 60) % 12) / 12) * 360 - 90;
  const minuteHandDegree = ((minutes + seconds / 60) / 60) * 360 - 90;
  const secondHandDegree = (seconds / 60) * 360 - 90;

  secondHand.style.transform = `rotate(${secondHandDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegree}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegree}deg)`;
};

const renderTimeIndicators = () => {
  [...new Array(12)].forEach((_, index) => {
    const indicator = document.createElement("span");
    indicator.classList.add("indicator");
    if ((index + 1) % 3 === 0) {
      indicator.classList.add("bold");
    }
    const degree = ((index + 1) / 12) * 360 - 90;
    const indicatorWrapper = document.createElement("div");
    indicatorWrapper.classList.add("indicator-wrapper");
    indicatorWrapper.style.transform = `rotate(${degree}deg)`;
    indicatorWrapper.appendChild(indicator);
    clock.appendChild(indicatorWrapper);
  });
};
renderTimeIndicators();

setInterval(updateClock, 1000);
