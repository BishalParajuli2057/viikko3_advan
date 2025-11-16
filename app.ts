import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("server is up and running");
});

app.get("/hello", (req, res) => {
  res.json({
    msg: "Hello world!",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
