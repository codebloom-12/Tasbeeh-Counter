let count = 0;

const countDisplay = document.getElementById("count");
const countBtn = document.getElementById("countBtn");
const countresetBtn = document.getElementById("resetBtn");

function increaseCount(){
  count++;
  countDisplay.innerText = count;
}

function resetCount(){
    count=0;
    countDisplay.innerText = count;
}

countBtn.addEventListener("click",increaseCount);
countresetBtn.addEventListener("click",resetCount);
