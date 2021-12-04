let skills_section = document.querySelector(".our-skills");

let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= skills_section.offsetTop) {
    spans.style.width = spans.dataset.width;
  }
};

// Let CountDown For The Event 
let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();

// console.log(countDownDate);

let counter  = setInterval ( () => {
    // Get Date Now
    let dateNow = new Date().getTime();
    
    // Find the difference between now and countDown date
    let dateDifference = countDownDate - dateNow;
    
    // Get time units
    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    
    let hours = Math.floor(dateDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    
    let minutes = Math.floor(dateDifference % (1000 * 60 * 60) / (1000 * 60));
    
    let seconds = Math.floor(dateDifference % (1000 * 60) / 1000);
    
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    
    if (dateDifference < 0) {
        clearInterval(counter);
        
        
    }
    
}, 1000) 

// Increase numbers on scrolling

let nums = document.querySelectorAll('.box .number');
let stats = document.querySelector('.stats');

let started = false; // Function not started

window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            nums.forEach((num) => startcount(num));
        }
        started = true
    }

}

function startcount(elem) {
    let goalNumber = elem.dataset.goal;
    
    let countDown = setInterval(() => {
        elem.textContent++;
        
        if (elem.textContent == goalNumber) {
            clearInterval(countDown);
        }
    }, 1000 / goalNumber);
}

