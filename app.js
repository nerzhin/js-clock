function getHourDeg(hours, minutes, seconds) {
  let hourHand = document.querySelector('.hour-hand');
 if (( ((3600*hours + 60*minutes + seconds) / 43200)*360 + 90 )== 90) {
   hourHand.style.transition = '0';
 };
  return ((3600*hours + 60*minutes + seconds) / 43200)*360 + 90;
}

function getMinuteDeg(hours, minutes, seconds)  {
  let minuteHand = document.querySelector('.minute-hand');
  if ((((60*minutes+seconds)/3600)*360 + 90) == 90) {
    minuteHand.style.transition = '0';
  };
  return ((60*minutes+seconds)/3600)*360 + 90;
}

function getSecondDeg(hours, minutes, seconds) {
  let secondHand = document.querySelector('.second-hand');
  if (((seconds/60)*360 + 90) == 90) {
    secondHand.style.transition = '0';
  };
  return (seconds/60)*360 + 90;

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
console.log(getHourDeg(hours, minutes, seconds), getMinuteDeg(hours, minutes, seconds), getSecondDeg(hours, minutes, seconds));
}

getTime();
setInterval(getTime, 1000);
