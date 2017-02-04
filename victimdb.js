let victims = [];

const addVictim = (victimID) => {
  let newVictim = { victimID };

  if (!getVictim(victimID))
    victims.push(newVictim);
}

const getVictim = (victimID) => victims.find((v) => v.victimID == victimID);

const addCommand = (command, victim) => {
   if (!isNaN(victim))
     victim = getVictim(victim);
   victim.commands ? victim.commands.push(command) : (victim.commands = [command]);
 }

const getNextCommand = (victim) => victim.commands ? victim.commands.pop() : null;

const getVictimCount = () => victims.length;

const addMassCommand = (command) => victims.map((victim) => addCommand(command, victim));


module.exports = {
  addVictim,
  getVictim,
  addCommand,
  getNextCommand,
  getVictimCount,
  addMassCommand
}
