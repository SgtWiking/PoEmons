//calculates the safe zone for leveling 100% xp multiplier
function safeZone (parameterLevel) {
  return floor(3 + parameterLevel / 16);
}
//calculates effective difference between player level and zone level
function effectiveDifference (parLevel,parZone) {
  return max(abs(parLevel - parZone) - safeZone(parZone), 0);
}
//calculates xp multiplier
function xpMultiplierLow (parLevel,parZone) {
  let temp1 = parLevel+5;
  let temp2 = parLevel+5+ Math.pow(safeZone(parZone),2.5);
  let temp3 = Math.pow(temp1/temp2,1.5);
  return max(temp3,0.01)
}
function xpMultiplierHigh (parLevel,parZone) {
  let temp = xpMultiplierLow(parLevel,parZone) * 1/(1+0.1*(parLevel-94));
  return max(temp,0.01)
}
function calculateRawXp(currentLevel,zoneLevel){
  //TODO
}
function calculateTime(currentLevel,zoneLevel,xpPerHour,playerLevels,xpToGain){
  //TODO
}
