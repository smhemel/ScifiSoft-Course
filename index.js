const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/key").mongoURI;

const app = express();
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

mongoose
  .connect(db)
  .then(() => console.log("Database Connected..."))
  .catch(err=>console.log(err));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use('./api/users',users);
app.use('./api/posts',posts);
app.use('./api/profile',profile);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Running.....");
});
