
// Counter
let counter = 0;
const counterDisplay = document.getElementById("counterDisplay");
document.getElementById("incrementbtn").addEventListener("click", () => {
  counter++; // 
  counterDisplay.textContent = counter;
});

document.getElementById("decrementbtn").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

document.getElementById("resetbtn").addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

// countdown
let countDown = 10;
let countDownIntervel;
const countdownDisplay = document.getElementById("countdownDisplay");
const customInput = document.getElementById("countdownInput"); 

function startCounter() {
  if (countDownIntervel) clearInterval(countDownIntervel);
  countdownDisplay.textContent = countDown; 
  countDownIntervel = setInterval(() => {
    countDown--;
    countdownDisplay.textContent = countDown; 
    if (countDown <= 0) {
      clearInterval(countDownIntervel); 
      countdownDisplay.textContent = "It's Over"; 
    }
  }, 1000);
}

document.getElementById("startbtn").addEventListener("click", () => {
  const customValue = parseInt(customInput.value); 
  countDown = customValue > 0 ? customValue : 10; 
  startCounter();
});

document.getElementById("stopbtn").addEventListener("click", () => {
  clearInterval(countDownIntervel); 
});

document.getElementById("resetCountdownbtn").addEventListener("click", () => {
  clearInterval(countDownIntervel); 
  countDown = 10; 
  countdownDisplay.textContent = countDown; 
});
