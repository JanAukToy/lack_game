

function setTweetButton(score,counter){
    $('#tweet-area').empty();
    
    twttr.widgets.createShareButton(
      "",
      document.getElementById("tweet-area"),
      {
        size: "large", 
        text: "私は"+counter+"回挑戦し、最高記録は"+score+"回だったぞ！！＜＜強運は誰だ！！運試しゲーム＞＞", 
        hashtags: "運試しゲーム", 
      }
    );
}
