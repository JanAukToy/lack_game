let random = Math.floor(Math.random() * 2) + 1;
left = 1;
right = 2;
count = 0;

function push(btnNo) {
  let logt = document.getElementById("log").textContent;

  let log = document.getElementById("log");

  if (btnNo === 1) {
    if (random === left) {
      count += 1;
      document.getElementById("count").innerText = count;

      if (count > logt) {
        log.innerHTML = count;
      }
    } else {
      count = 0;
      document.getElementById("count").innerText = count;
    }
  }

  if (btnNo === 2) {
    if (random === right) {
      count += 1;
      document.getElementById("count").innerText = count;

      if (count > logt) {
        log.innerHTML = count;
      }
    } else {
      count = 0;
      document.getElementById("count").innerText = count;
    }
  }
  random = Math.floor(Math.random() * 2) + 1;  

  function setTweetButton(text){
    $('#tweet-area').empty();
    
    twttr.widgets.createShareButton(
      "",
      document.getElementById("tweet-area"),
      {
        size: "large", //ボタンはでかく
        text: "＜＜強運は誰だ！！運試しゲーム＞＞私は"+text+"回連続成功したぞ！！", // 狙ったテキスト
        hashtags: "運試しゲーム", // ハッシュタグ
      }
    );
  }
  setTweetButton(logt);
}

