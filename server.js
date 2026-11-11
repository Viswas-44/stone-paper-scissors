
import express from "express";

const app = express();

app.use(express.static("dist"));

// Home route
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "dist" });
});

// Game route
app.get("/game", (req, res) => {
  res.sendFile("index.html", { root: "dist" });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
