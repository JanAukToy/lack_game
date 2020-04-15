let random = Math.floor(Math.random() * 2) + 1;
left = 1;
right = 2;
count = 0;

function push(btnNo) {
  if (btnNo === 1) {
    if (random === left) {
      count += 1;
      document.getElementById("count").innerHTML = count;
    }
    else {
      count = 0;
      document.getElementById("count").innerHTML = count;
    }
  }
  if (btnNo === 2) {
    if (random === right) {
      count += 1;
      document.getElementById("count").innerHTML = count;
    }
    else {
      count = 0;
      document.getElementById("count").innerHTML = count;
    }
  }
  random = Math.floor(Math.random() * 2) + 1;
};
