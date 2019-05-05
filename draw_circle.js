export default function drawCircle(){
  // color in the background
  mainContext.fillStyle = backgroundColor;
  mainContext.fillRect(0, 0 , contextWidth, contextHeight);

  //draw the circle
  mainContext.beginPath();

  mainContext.arc(
    halfCanvas, // horizontal center position
    halfCanvas, // vertical center position
    radius, // radius
    0, // start angle
    tau, // end angle
    false // drawn counterclockwise? T/F
  );

  //end of drawing the circle
  mainContext.closePath();

  //color in the circle
  mainContext.fillStyle = "rgba(0 ,0 ,125 , 0.5)";
  mainContext.fill();
};
