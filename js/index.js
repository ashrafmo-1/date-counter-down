// let goal = new Date(2024, 2, 11, 0, 0, 0).getTime(); //elkwawy
let goal = new Date("Mar 11, 2024 00:00:00").getTime(); // ashraf
console.log(goal);

const counter = setInterval(() => {
  // get time now
  let now = new Date().getTime();
  let control = goal - now;

  let second = Math.floor(control % (1000 * 60) / 1000);
  let muints = Math.floor(control % (1000 * 60 * 60) / (1000 * 60));
  let hours = Math.floor(control % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let days = Math.floor(control / (1000 * 60 * 60 * 24));


  document.querySelector(".second").innerHTML = second;
  document.querySelector(".muints").innerHTML = muints;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".days").innerHTML = days;

}, 1000)
