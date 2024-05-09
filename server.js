const express = require("express");
const app = express();
const PORT = process.env.PORT || 8010;
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const user = require("./routes/user");
const post = require("./routes/post");

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to JWT");
});

app.use("/user", user);
app.use("/post", post);

app.listen(PORT, () => {
  console.log(`listening on http://Localhost:${PORT}`);
});
