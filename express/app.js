const express = require("express");
const axios = require("axios");

const app = express();

const backendUrl = "http://flask:6000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(backendUrl);

    res.send(`
      <h1>Express Frontend Running</h1>
      <h3>Node Port: 4000</h3>
      <pre>${JSON.stringify(response.data, null, 2)}</pre>
    `);
  } catch (err) {
    res.send("Unable to connect backend");
  }
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Express running on port 4000");
});