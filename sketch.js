var compassHeading = 0;
var capture;
var east_txt = "east";
var south_text = "south";
var west_text = "west";
var north_text = "north";
var gif_south;
var gif_east;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight, P2D);
	gif_south = loadGif('waves.gif');
	gif_east = loadGif('sun.gif');
}

function draw() {
	
	// clears the canvas each time draw runs
	background(255);
	
	imageMode(CENTER);
	//set some properties
	fill(50);
	textSize(100);
	textAlign(CENTER);
	// translate moves the grid so that the (0,0) point is at the center of the canvas rather than in the top left
	translate(width/2, height/2);
	
	if(compassHeading > 45 && compassHeading < 135) {
		//text(east_txt,0,0);
		image(gif_east, 0, 0,width, width);
	} else if (compassHeading >= 135 && compassHeading < 225) {
		//text(south_text,0,0);
		image(gif_south, 0, 0,width, width);
	} else if (compassHeading >= 225 && compassHeading < 315) {
		text(west_text,0,0);
	} else if (compassHeading >= 315 && compassHeading < 359 || compassHeading >= 0 && compassHeading <=45) {
		text(north_text,0,0);
	} else {
		text("Rose",0,0);
	}
}

// javascript for device orientation 
window.addEventListener('deviceorientation', function(e) {
	alpha = e.alpha;
	beta = e.beta;
	gamma = e.gamma;
	if(e.webkitCompassHeading) {
		compassHeading = e.webkitCompassHeading;
	} else {
		compassHeading = alpha;
	}
});
