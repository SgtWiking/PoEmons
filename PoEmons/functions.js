//Safe zone for leveling 100% xp multiplier
function safeZone (currentLevel) {
     return floor(3 + currentLevel / 16);
}
//Effective difference between player level and zone level
function effectiveDifference (currentLevel,zoneLevel) {
     return max(abs(currentLevel - zoneLevel) - safeZone(zoneLevel), 0);
}
//Xp multiplier
function xpMultiplier (currentLevel,zoneLevel) {
     let temp1 = currentLevel + 5;
     let temp2 = currentLevel + 5 + Math.pow(effectiveDifference(currentLevel,zoneLevel),2.5);
     if (currentLevel<95){
          let total = Math.pow(temp1/temp2,1.5);
          return max(total,0.01);
     } else {
          let temp3 = 1/(1+0.1*(currentLevel-94));
          let total = Math.pow(temp1/temp2,1.5)*temp3;
          return max(total,0.01);
     }
}
//Pure XP gained before diminishing returns
function calculateRawXp(currentLevel,zoneLevel,xpPerHour){
     return (xpPerHour/xpMultiplier(currentLevel,zoneLevel));
}
//Hours needed per level till 100 returned in an array
function calculateTime(currentLevel,zoneLevel,xpPerHour,xpToGain){
     let tempArray = [];
     let tempRawXp = calculateRawXp(currentLevel,zoneLevel,xpPerHour);
     for(i=currentLevel-1;i<99;i++){
          total = xpToGain[i]/(tempRawXp*xpMultiplier(i,zoneLevel));
          tempArray.push(total);
     }
     return tempArray;
}
