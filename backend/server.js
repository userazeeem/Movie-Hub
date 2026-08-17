const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("🎬 Welcome to The Movie Hub API!");
});

app.listen(PORT, () => {
    console.log(`🎬 The Movie Hub server is running on http://localhost:${PORT}`);
});