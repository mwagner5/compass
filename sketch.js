var compassHeading = 0;
var capture;
var east_txt = "east"
var south_text = "south"

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
  textSize(100)
  textAlign(CENTER)
  // translate moves the grid so that the (0,0) point is at the center of the canvas rather than in the top left
  translate(width/2, height/2)
  

  if(compassHeading > 45 && compassHeading < 135) {
  		text(east_txt,0,0);
  } if else (compassHeading >= 135 && compassHeading < 225) {
  		text(south_text,0,0);

  } else {
  		rotateX(radians(rotationX));
  		rotateY(radians(rotationY));
  		text(rotationX,0,0);

  }

  image(capture, 0, 0, width, width * capture.height / capture.width);
  //filter(INVERT);

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
