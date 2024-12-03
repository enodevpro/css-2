const text = "I love you";
const chars = text.split("");

const root = document.getElementById("root");

chars.forEach((char, index) => {
  let span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0\u00A0" : char;
  span.style.transitionDelay = `${(index % 10) * 0.1}s`;
  root.appendChild(span);
});
