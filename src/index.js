'use strict';
import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
console.log(colors.length);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

let intervalId = null;
let bgChanging = false;
btnStart.addEventListener('click', startChangeColor);
function startChangeColor(color) {
  if (bgChanging) {
    return;
  }
  bgChanging = true;
  intervalId = setInterval(getColorIndex, 1000);
  console.log(intervalId);
}
btnStop.addEventListener('click', stopChangeColor);
function stopChangeColor() {
  clearInterval(intervalId);
  bgChanging = false;
}

function getColorIndex() {
  const index = randomIntegerFromInterval(0, colors.length - 1);
  bodyRef.bgColor = colors[index];
}
