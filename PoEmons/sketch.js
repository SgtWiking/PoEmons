"use strict";
function setup() {

	var playerLevel = [];
	for (let i = 0; i < 100; i++) {
		playerLevel[i] = i + 1;
	}
	//console.log(playerLevel);

	//safe zone based on current level
	var currentLevel = 32;
	var safeZone = floor(3 + currentLevel / 16);
	//console.log(safeZone);

	//effective difference
	var zoneLevel = 45;
	var effectiveDifference = max(abs(currentLevel - zoneLevel) - safeZone, 0);
	//console.log(effectiveDifference);

	//calculating xp multiplier
	var xpMultiplier;
	var xpMultiplierPart;
	if (currentLevel < 95) {
		xpMultiplier = 1;
	} else {
		xpMultiplier = 2;
	}
	console.log (xpMultiplier);

}

function draw() {

}

/*
TODO:
-calculate xp multiplier
-add currentXp[] - nextLevelXp[]
-triple array?? playerLevel [1-100][currentXp][nextLevelXp]; or object with current/next xp on each level?
-rawxp = xpperhour * xpmultiplier
-100 - current level, how much xp for 100?
-effective difference and xpmultiplier will have to be FUNCTIONS! to call each time for each level till 100
*/