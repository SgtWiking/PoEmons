"use strict";
var lvlSlider,zoneSlider,xpSlider;
var currentLevel,zoneLevel,xpPerHour;
var timeArray;

function setup() {

	createCanvas(840,525);
	background(150,200,200);
	frameRate(60);
	textSize(32);

	lvlSlider = createSlider(1, 100, 1);
  lvlSlider.position(20, 20);
  zoneSlider = createSlider(1, 100, 1);
  zoneSlider.position(20, 50);
  xpSlider = createSlider(1, 1000, 1);
  xpSlider.position(20, 80);

}

function draw() {

	if (currentLevel != lvlSlider.value() || zoneLevel != zoneSlider.value() || xpPerHour != xpSlider.value()) {
		clear();
		background(150,200,200);
	}
	currentLevel = lvlSlider.value();
	zoneLevel = zoneSlider.value();
	xpPerHour = xpSlider.value();
	text("Player Level: " +currentLevel, lvlSlider.x * 2 + lvlSlider.width, 35);
  text("Zone Level: " +zoneLevel, zoneSlider.x * 2 + zoneSlider.width, 65);
  text("XP Per Hour: " +xpPerHour, xpSlider.x * 2 + xpSlider.width, 95);

	timeArray = calculateTime(currentLevel,zoneLevel,xpPerHour,playerLevels,xpToGain);
	//console.log(timeArray);


	//TODO: Function that calculates RAW xp before xp multiplier
	//TODO: Make a function that calculates xp needed till target level and throw it in array.
	//TODO: Make a pressable button that calculates xp till 100
	//DONE: Figure out how to clear screen when moving sliders.

}
