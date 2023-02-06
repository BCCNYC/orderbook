import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("I AM WORKING YESS");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
