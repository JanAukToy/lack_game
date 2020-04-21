let random = Math.floor(Math.random() * 2) + 1;
const left = 1;
const right = 2;
let count = 0;
let count_b = 0;

function push(btnNo) {
  let logt = document.getElementById("high_score").textContent;
  let log = document.getElementById("high_score");

  let counter = document.getElementById("count");

  let b_count = document.getElementById("battle_count");

  if (btnNo === 1) {
    if (random === left) {
      count += 1;
      counter.innerText = count;

      if (count > logt) {
        log.innerHTML = count;
      }
    } else {
      count = 0;
      counter.innerText = count;

      count_b += 1;
      b_count.innerText = count_b;
    }
  }

  if (btnNo === 2) {
    if (random === right) {
      count += 1;
      counter.innerText = count;

      if (count > logt) {
        log.innerHTML = count;
      }
    } else {
      count = 0;
      counter.innerText = count;

      count_b += 1;
      b_count.innerText = count_b;
    }
  }
  random = Math.floor(Math.random() * 2) + 1;  

  let bcount_txt = document.getElementById("battle_count").textContent;
  setTweetButton(logt,bcount_txt);
}
