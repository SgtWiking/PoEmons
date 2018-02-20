"use strict";
var lvlSlider,zoneSlider,xpSlider;
var currentLevel,zoneLevel,xpPerHour;
var timeArray;
var globalbackground = [255,55,55];

function setup() {

	createCanvas(840,525);
	background(globalbackground);
	frameRate(5);
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
		background(globalbackground);
		currentLevel = lvlSlider.value();
		zoneLevel = zoneSlider.value();
		xpPerHour = xpSlider.value();
		//timeArray = calculateTime(currentLevel,zoneLevel,xpPerHour,xpToGain);
		//TEST
		console.log('==========================');
		console.log('Safe Zone:'+safeZone(currentLevel));
		console.log('Effective Diff:'+effectiveDifference(currentLevel,zoneLevel));
		console.log('xpMulti:'+xpMultiplier(currentLevel,zoneLevel));
		console.log('rawXp:'+calculateRawXp(currentLevel,zoneLevel,xpPerHour));
		console.log(timeArray);
		console.log('==========================');
		//TEST
	}

	text("Player Level: " +currentLevel, lvlSlider.x * 2 + lvlSlider.width, 35);
  text("Zone Level: " +zoneLevel, zoneSlider.x * 2 + zoneSlider.width, 65);
  text("XP Per Hour: " +xpPerHour, xpSlider.x * 2 + xpSlider.width, 95);
	text("DETO SEND HELP SHIT IS ON FIRE YOOO" , 20, 200);
	text("(●´ω｀●)ゞ(●´ω｀●)ゞ(●´ω｀●)ゞ(●´ω｀●)ゞ" , 20, 230);

	//DONE: Function that calculates RAW xp before xp multiplier
	//TODO: Make a function that calculates xp needed till target level and throw it in array.
	//DONE: Figure out how to clear screen when moving sliders.

}
