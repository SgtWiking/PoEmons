"use strict";
var lvlSlider,zoneSlider,xpSlider;
var currentLevel,zoneLevel,xpPerHour;
var timeArray;
var globalbackground = [255,55,55];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function setup() {

	createCanvas(840,525);
	background(globalbackground);
	frameRate(5);
	textSize(32);

	lvlSlider = createSlider(1, 100, 1);
	lvlSlider.position(20, 20);
	zoneSlider = createSlider(1, 100, 1);
	zoneSlider.position(20, 50);
	xpSlider = createSlider(1, 100, 1);
	xpSlider.position(20, 80);

}

function draw() {

	if (currentLevel != lvlSlider.value() || zoneLevel != zoneSlider.value() || xpPerHour != xpSlider.value()*10000000) {
		clear();
		background(globalbackground);
		currentLevel = lvlSlider.value();
		zoneLevel = zoneSlider.value();
		xpPerHour = xpSlider.value()*10000000;
		timeArray = calculateTime(currentLevel,zoneLevel,xpPerHour,xpToGain);
		text('Safe Zone: ± '+safeZone(currentLevel)+ ' levels.',20,130);
		text('Exp Gained:'+Math.round(xpMultiplier(currentLevel,zoneLevel)*100*10)/10+ '%',20,170);
		text('Raw Exp:'+Math.round(calculateRawXp(currentLevel,zoneLevel,xpPerHour)/1000000)+'M',20,210);
		text('Time To 100: ' +Math.round(timeArray.reduce(reducer))+ ' hours.',20,250);
		//TEST
		console.log('==========================');
		console.log('Safe Zone:'+safeZone(currentLevel));
		console.log('Effective Diff:'+effectiveDifference(currentLevel,zoneLevel));
		console.log('xpMulti:'+xpMultiplier(currentLevel,zoneLevel));
		console.log('rawXp:'+calculateRawXp(currentLevel,zoneLevel,xpPerHour));
		console.log(timeArray);
		console.log('Total Hours till 100: ' +timeArray.reduce(reducer));
		console.log('==========================');
		//TEST
	}

	text("Player Level: " +currentLevel, lvlSlider.x * 2 + lvlSlider.width, 35);
	text("Zone Level: " +zoneLevel, zoneSlider.x * 2 + zoneSlider.width, 65);
	text("XP Per Hour: " +xpPerHour/1000000 + 'M', xpSlider.x * 2 + xpSlider.width, 95);

	//DONE: Function that calculates RAW xp before xp multiplier
	//TODO: Make a function that calculates xp needed till target level and throw it in array.
	//DONE: Figure out how to clear screen when moving sliders.

}
