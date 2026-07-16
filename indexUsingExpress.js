const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Homepage");
});

app.get("/contact-us", (req, res) => {
  res.end(
    "You can contact us at Email : sameerahmadk789@gmail.com  Ph: +91 999 999 9999",
  );
});

app.post("/tweet", (req, res) => {
  res.status(201).end("tweet created succesfully");
});

app.get("/tweet", (req, res) => {
  res.end("Here Are Your Tweets :\nTWEET-1\nTWEET-2\nTWEET-3");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Running on PORT : ${PORT}`);
});
