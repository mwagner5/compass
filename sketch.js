var compassHeading = 0;
var capture;
var east_txt = "east";
var south_text = "south";
var west_text = "west";
var north_text = "north";

function setup() {
	createCanvas(window.innerWidth, window.innerHeight, P2D);
}

function draw() {
  // clears the canvas each time draw runs
  background(255);

//set some properties
  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(100);
  textAlign(CENTER);
  // translate moves the grid so that the (0,0) point is at the center of the canvas rather than in the top left
  translate(width/2, height/2);
  text("direction", 0, 0);

  if(compassHeading > 45 && compassHeading < 135) {
	  text(east_txt,0,0);
  } else if (compassHeading >= 135 && compassHeading < 225) {
	  text(south_text,0,0);
  } else if (compassHeading >= 225 && compassHeading < 315) {
	  text(west_text,0,0);
  } else if (compassHeading >= 315 && compassHeading < 359 || compassHeading >= 0 && compassHeading <=45) {
	  text(north_text,0,0);
  } else {
	  text("Rose",0,0);
  }
// 	rotateX(radians(rotationX));
// 	rotateY(radians(rotationY));
// 	text("I am an android!",0,0);

}

// javascript for device orientation 
window.addEventListener('deviceorientation', function(e) 
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
  if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = alpha;
        }
});
