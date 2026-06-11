const express = require("express");
const axios = require("axios");

const app = express();

const backendUrl = "http://flask:6000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(backendUrl);
    res.send(`
      <h1>Helo from Devops/h1>
      <pre>${JSON.stringify(response.data, null, 2)}</pre>
    `);
  } catch (err) {
    res.send("Unable to connect backend");
  }
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Express running");
});