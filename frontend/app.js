const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post(
      "http://backend:6000/submit",
      req.body
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error connecting to backend");
  }
});

app.listen(4000, () => {
  console.log("Frontend running on port 4000");
});