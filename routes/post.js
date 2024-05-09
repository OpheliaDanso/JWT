const express = require("express");
const requireAuth = require("../mIddlewares/requireAuth");

const { createPost, getAllPost } = require("../controllers/post");

const app = express.Router();

app.use(requireAuth);

app.route("/").get(getAllPost).post(createPost);

module.exports = app;
