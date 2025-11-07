const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1: message1, greet2: message2 });
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1: "Hello world", greet2: "Bon jour" });
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename: "./public/Apple_logo_black.svg", alt: "Apple Logo" });
});

app.get("/english", (req, res) => {
  res.render('show', { greet1: "Good Morning", greet2: "good morning" });
});

app.get("/yonedu", (req, res) => {
  res.render('show', { greet1: "夢ならばどれほど良かったdeath shot", greet2: "いまだにあなたのこと you maybe kill" });
});


app.get("/omikuji1", (req, res) => {
  const num = Math.floor(Math.random() * 6 + 1);
  let luck = '';
  if (num == 1) luck = '大吉';
  else if (num == 2) luck = '中吉';

  res.send('今日の運勢は' + luck + 'です');
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor(Math.random() * 6 + 1);
  let luck = '';
  if (num == 1) luck = '大吉';
  else if (num == 2) luck = '中吉';

  res.render('omikuji2', { result: luck });
});

app.get("/omikuj3", (req, res) => {
  const num = Math.floor(Math.random() * 6 + 1);
  let luck = '';
  let comment = '';
  if (num == 1) {
    luck = '大吉';
    comment = 'Ahh～↑↑↑💥💥真夏🌞🌴🏄🎇🎆🌺のJamboree〜〜〜〜‼️‼️レゲエ🇯🇲💃🙌🏻砂浜🌺🌺🏖🏖🌴🌞Big Wave🌊🌊🌊🌊🌊🌊🌊💥💥💥 '
  }
  else if (num == 2) {
    luck = '中吉';
    comment = 'Wow wo‼️釘パンチ👊💥Wow wo‼️連発で‼️👊👊👊👊👊  ガッツガッツリガッツ‼️どんな夢💭も食える⁉️Wow wo‼️俺だけの🏋️Wow wo‼️フルコース🍽👨‍🍳ガッツガッツリガッツ‼️集めるのさ🤲世界を🌎皿に🍽乗せて‼️Wow wow wow 山を食え‼️🗣️🗻🍴Wow wow wow トリコ‼️Wow wow wow 海を食え‼️🗣️🌊🍴Wow wow wow トリ‼️トリ‼️トリ‼️トリコ‼️ '
  }
  else if (num == 3) {
    luck = '小吉';
    comment = 'うおw';
  }
  else if (num == 4) {
    luck = '末吉';
    comment = 'う，うおw';
  }
  else if (num == 5) {
    luck = '凶';
    comment = '身構えている時に死神は来ないものだ';
  }
  else if (num == 6) {
    luck = '大凶';
    comment = '🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹';
  }

  res.render('omikuji3', { result: luck, comment: comment });
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
