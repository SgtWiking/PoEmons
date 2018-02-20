"use strict";
var lvlSlider,zoneSlider,xpSlider;

function setup() {

	createCanvas(840,525);
	background(155);
	frameRate(60);

	lvlSlider = createSlider(1, 100, 1);
  lvlSlider.position(20, 20);
  zoneSlider = createSlider(1, 100, 1);
  zoneSlider.position(20, 50);
  xpSlider = createSlider(1, 1000, 1);
  xpSlider.position(20, 80);

}

function draw() {

	var currentLevel = lvlSlider.value();
	var zoneLevel = zoneSlider.value();
	var xpPerHour = xpSlider.value();
	text("Player Level: " +currentLevel, lvlSlider.x * 2 + lvlSlider.width, 35);
  text("Zone Level: " +zoneLevel, zoneSlider.x * 2 + zoneSlider.width, 65);
  text("XP Per Hour: " +xpPerHour, xpSlider.x * 2 + xpSlider.width, 95);

	//TODO: Make a function that calculates xp needed till target level.
	//TODO: Make a pressable button that calculates xp till targeted level.
	//TODO: Figure out how to clear screen when moving sliders.

}

/*
TODO:
//-calculate xp multiplier
//-add currentXp[] - nextLevelXp[]
//-triple array?? playerLevels [1-100][currentXp][nextLevelXp]; or object with current/next xp on each level?
-rawxp = xpperhour * xpmultiplier
-100 - current level, how much xp for 100?
-effective difference and xpmultiplier will have to be FUNCTIONS! to call each time for each level till 100
*/
