import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Ok!" });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
