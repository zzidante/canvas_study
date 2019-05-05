export default function drawCircle(
  {
    context,
    backgroundColor,
    contextWidth,
    contextHeight,
    halfCanvas,
    radius,
    tau
  }
) {
  // color in the background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0 , contextWidth, contextHeight);

  //draw the circle
  context.beginPath();

  context.arc(
    halfCanvas, // horizontal center position
    halfCanvas, // vertical center position
    radius, // radius
    0, // start angle
    tau, // end angle
    false // drawn counterclockwise? T/F
  );

  //end of drawing the circle
  context.closePath();

  //color in the circle
  context.fillStyle = "rgba(0 ,0 , 125 , 0.5)";
  context.fill();
};
