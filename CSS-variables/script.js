const toolsElement = document.querySelector(".tools");
const inputs = toolsElement.querySelectorAll("input");
const root = document.documentElement;

const handleUpdate = (e) => {
  const prefix = e.target.getAttribute("data-value-prefix");
  const value = prefix ? e.target.value + prefix : e.target.value;
  const name = e.target.name
  root.style.setProperty(`--${name}`, value);
};

inputs.forEach((input) => {
  input.addEventListener("input", handleUpdate);
});
