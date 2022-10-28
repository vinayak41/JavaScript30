const onKeyPress = (e) => {
  const keyCode = e.keyCode;
  const buttonElement = document.querySelector(`div[data-key="${keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${keyCode}"]`)
  if (buttonElement) {
    buttonElement.classList.add("active");
  }
  if(sound) {
    sound.currentTime = 0;
    sound.play()
  }
};

const removeTrsansition = (e) => {
  if(e.propertyName === "transform") {
    e.target.classList.remove("active");
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTrsansition));

window.addEventListener("keydown", onKeyPress);
