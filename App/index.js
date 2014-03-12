var w = window.innerWidth;
var h = window.innerHeight;

var canvas = document.getElementById('canvas');
canvas.width = 480*2;
canvas.height = 320*2;

canvas.style.width = 480*2;
canvas.style.height = 320*2;

// var ctx = canvas.getContext('2d');

if(!document.body.addEventListener)
	document.body.addEventListener = function(){}

if(!window.location)
	window.location = {
		protocol: "file://"
	}

if(!window.PIXI)
	ejecta.include("pixi.js")

var myMask = new PIXI.Graphics();
myMask.beginFill();
myMask.drawCircle(310, 310, 300);
myMask.endFill();
 
renderer = new PIXI.WebGLRenderer(canvas.width, canvas.height, canvas, false, false);
stage = new PIXI.Stage(0x0);

stage.addChild(myMask)
 
// create something to be masked..
var mySprite = PIXI.Sprite.fromImage("bg.png");
stage.addChild(mySprite)
 
// the magic line!
mySprite.mask = myMask

setInterval(function() {
	renderer.render( stage );  	
}, 17)
