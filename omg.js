// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var site = 'http://miwomi.net/omg/';
var imgs = [
"Animals-Also-Get-Surprised-016.jpg",
"Surprised-Panther--57632.jpg",
"hqdefault.jpg",
"i-566cf32f98abba147c8228ffa862a41.jpg",
"images.jpeg",
"images002.jpeg",
"images003.jpeg",
"images222.jpeg",
"images234.jpeg",
"images422.jpeg",
"images44.jpeg",
"images445.jpeg",
"imagesf92.jpeg",
"l-Surprised-seal.jpg",
"oddly-human-animals-omg-cute-things-071812-03.jpg",
"oh-my-god-it-s-jerry-108722.jpg",
"omg01.jpg",
"omg1.jpg",
"omg7.jpg",
"surprised-animals-5.jpg",
"surprised-animals-7.png",
"tumblr_n4o3erkg3K1qewacoo10_400.gif",
"tumblr_n4o3erkg3K1qewacoo1_1280.png",
"tumblr_n4o3erkg3K1qewacoo2_500.png",
"tumblr_n4o3erkg3K1qewacoo3_1280.png",
"tumblr_n4o3erkg3K1qewacoo4_500.png",
"tumblr_n4o3erkg3K1qewacoo5_1280.png",
"tumblr_n4o3erkg3K1qewacoo6_1280.png",
"tumblr_n4o3erkg3K1qewacoo7_1280.png",
"tumblr_n4o3erkg3K1qewacoo8_500.png",
"tumblr_n4o3erkg3K1qewacoo9_1280.png",
"unnamed.jpg"
];


app.use(logfmt.requestLogger());

app.get('/', function(req, res) {

  var omg = {
    'omg' : site + imgs[Math.floor((Math.random() * imgs.length))]
  };

  if (req.query.format == 'html'){
    res.send('<img src="' + omg.omg + '" />');
  } else {
    res.send(omg);
  }
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
