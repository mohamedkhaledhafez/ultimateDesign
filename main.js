// Increase numbers on scrolling

let nums = document.querySelectorAll(".stats .number");
let stats = document.querySelector(".stats");
let started = false; // Function not started

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      nums.forEach((num) => startcount(num));
    }
    started = true;
  }
};

function startcount(elem) {
  let goal = elem.dataset.goal;

  let countDown = setInterval(() => {
    elem.textContent++;
    if (elem.textContent == goal) {
      clearInterval(countDown);
    }
  }, 1000 / goal);
}

///////////////////////////////////////////////////////////////////
let progressSpans = document.querySelectorAll(".skill-progress span");
let ourSkills = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY > ourSkills.offsetTop + 100) {
    // this.console.log("skills section reached :)");

    progressSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};

/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// Let CountDown For The Event
let countDownDate = new Date("Feb 31, 2022 23:59:59").getTime();

// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find the difference between now and countDown date
  let dateDifference = countDownDate - dateNow;

  // Get time units
  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));

  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDifference < 0) {
    clearInterval(counter);
  }
}, 1000);

/////////////////////////////////////////////////////////////////////////////////
