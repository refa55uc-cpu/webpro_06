const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


let memes = [
  { id: 1, meme: "止まるんじゃねぇぞ...", char: "オルガ・イツカ", original: "機動戦士ガンダム　鉄血のオルフェンズ", detail: "俺がいる限り，俺は止まんねぇからよ..." },
  { id: 2, meme: "それでも...!!!!ユニコｫｫｫｫーーーーン!!!!", char: "バナージ．リンクス", original: "機動戦士ガンダムUC", detail: "ガンダム，俺に力を貸せっ!!!" },
  { id: 3, meme: "お前を殺す（デデン!!）", char: "ヒイロ・ユイ", original: "新機動戦記ガンダムW", detail: "お前を殺す(デデン!!)" },
  { id: 4, meme: "連邦に反省を促すダンス", char: "偽マフティー", original: "機動戦士ガンダム　閃光のハサウェイ", detail: "やってみせろよ，マフティー!!!" },
  { id: 5, meme: "カツラン・ザラ", char: "アスラン・ザラ", original: "機動戦士ガンダムSEED", detail: "はぁ．．．(クソデカため息)" },
  { id: 6, meme: "50円(カオスガンダム)", char: "カオスガンダム", original: "機動戦士ガンダムSEED DESTINY", detail: "" }
];

// 一覧
app.get("/memes", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('memes', { data: memes });
});

// Create
app.get("/memes/create", (req, res) => {
  res.redirect('/public/memes_new.html');
});

// Read
app.get("/memes/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = memes[number];
  res.render('memes_detail', { id: number, data: detail });
});

// Delete_check
app.get("/memes/delete_check/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = memes[number];
  res.render('memes_delete_check', { id: number, data: detail });
});

// Delete
app.get("/memes/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  memes.splice(req.params.number, 1);
  res.redirect('/memes');
});

// Create
app.post("/memes", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = memes.length + 1;
  const meme = req.body.meme;
  const char = req.body.char;
  const original = req.body.original;
  const detail = req.body.detail;
  memes.push({ id: id, meme: meme, char: char, original: original, detail: detail });
  console.log(memes);
  res.render('memes', { data: memes });
});

// Edit
app.get("/memes/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = memes[number];
  res.render('memes_edit', { id: number, data: detail });
});
// Read
app.get("/memes/:number", (req, res) => {
  const number = req.params.number;
  const detail = memes[number];
  res.render("memes_detail", { id: number, data: detail });
});

// Update
app.post("/memes/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;

  memes[req.params.number].meme = req.body.meme;
  memes[req.params.number].char = req.body.char;
  memes[req.params.number].original = req.body.original;
  memes[req.params.number].detail = req.body.detail;
  console.log(memes);
  res.redirect('/memes');
});


let station = [
  { id: 1, code: "JE01", name: "東京駅" },
  { id: 2, code: "JE07", name: "舞浜駅" },
  { id: 3, code: "JE12", name: "新習志野駅" },
  { id: 4, code: "JE13", name: "幕張豊砂駅" },
  { id: 5, code: "JE14", name: "海浜幕張駅" },
  { id: 6, code: "JE05", name: "新浦安駅" },
];

app.get("/keiyo", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('db1', { data: station });
});

let station2_2 = [
  { id: 1, code: "JE01", name: "東京駅" },
  { id: 2, code: "JE07", name: "舞浜駅" },
  { id: 3, code: "JE12", name: "新習志野駅" },
  { id: 4, code: "JE13", name: "幕張豊砂駅" },
  { id: 5, code: "JE14", name: "海浜幕張駅" },
  { id: 6, code: "JE05", name: "新浦安駅" },
];


app.get("/keiyo2_2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('db2_2', { data: station2_2 });
});

let station2 = [
  { id: 1, code: "JE01", name: "東京駅", change: "総武本線，中央線，etc", passengers: 403831, distance: 0 },
  { id: 2, code: "JE02", name: "八丁堀駅", change: "日比谷線", passengers: 31071, distance: 1.2 },
  { id: 3, code: "JE05", name: "新木場駅", change: "有楽町線，りんかい線", passengers: 67206, distance: 7.4 },
  { id: 4, code: "JE07", name: "舞浜駅", change: "舞浜リゾートライン", passengers: 76156, distance: 12.7 },
  { id: 5, code: "JE12", name: "新習志野駅", change: "", passengers: 11655, distance: 28.3 },
  { id: 6, code: "JE17", name: "千葉みなと駅", change: "千葉都市モノレール", passengers: 16602, distance: 39.0 },
  { id: 7, code: "JE18", name: "蘇我駅", change: "内房線，外房線", passengers: 31328, distance: 43.0 },
];

app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', { data: station2 });
});

// Create
app.get("/keiyo2/create", (req, res) => {
  res.redirect('/public/keiyo2_new.html');
});

// Read
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[number];
  res.render('keiyo2_detail', { id: number, data: detail });
});

// Delete
app.get("/keiyo2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2.splice(req.params.number, 1);
  res.redirect('/keiyo2');
});

// Create
app.post("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push({ id: id, code: code, name: name, change: change, passengers: passengers, distance: distance });
  console.log(station2);
  res.render('keiyo2', { data: station2 });
});

// Edit
app.get("/keiyo2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[number];
  res.render('keiyo2_edit', { id: number, data: detail });
});

// Update
app.post("/keiyo2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;
  console.log(station2);
  res.redirect('/keiyo2');
});

app.get("/keiyo_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  station.push(newdata);
  res.render('db1', { data: station });
  // res.redirect('/public/keiyo_add.html');

});

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

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number(req.query.win);
  let total = Number(req.query.total);
  console.log({ hand, win, total });
  const num = Math.floor(Math.random() * 3 + 1);
  let cpu = '';
  let judgement = '';
  if (num == 1) cpu = 'グー';
  else if (num == 2) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  if ((hand == 'グー' && cpu == 'チョキ') || (hand == 'チョキ' && cpu == 'パー') || (hand == 'パー' && cpu == 'グー')) {
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  else if (hand == cpu) {
    judgement = 'あいこ';
    total += 1;
  }
  else {
    judgement = '負け';
    total += 1;
  }

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render('janken', display);
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
