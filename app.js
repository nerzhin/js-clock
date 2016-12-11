function getHourDeg(hours, minutes, seconds) {
  return ((3600*hours + 60*minutes + seconds) / 43200)*360 +360/4;
}

function getMinuteDeg(hours, minutes, seconds)  {
  return ((60*minutes+seconds)/3600)*360 + 360/4;
}

function getSecondDeg(hours, minutes, seconds) {
  return (seconds/60)*360 + 360/4;
}

function getTime() {
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let secondHand = document.querySelector('.second-hand');

hourHand.style.transform = `rotate(${getHourDeg(hours, minutes, seconds)}deg)`;
minuteHand.style.transform = `rotate(${getMinuteDeg(hours, minutes, seconds)}deg)`;
secondHand.style.transform = `rotate(${getSecondDeg(hours, minutes, seconds)}deg)`;
}

setInterval(getTime, 1000);
