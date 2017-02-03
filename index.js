import express from "express";

const PORT = process.env.PORT || 5000;
app = express();
app.listen(PORT);

app.get("/command",(req, res) =>{
  res.send("echo hello");
});
