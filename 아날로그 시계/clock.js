
const hourhand = document.querySelector(".hour");
const minhand = document.querySelector(".min");
const secondhand = document.querySelector(".sec");

function setDate() {
  const now = new Date();


  const seconds = now.getSeconds();
  const secondsDegrees = (seconds * 6) + 90;
  secondhand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins * 6) + 90;
  minhand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegree = hour * 30 + 90;
  hourhand.style.transform = `rotate(${hourDegree}deg)`;
}


setInterval(setDate, 1000);
setDate();
