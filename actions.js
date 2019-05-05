console.log('actions loaded!')

import drawCircle from './draw_circle.js';
import drawLine from './draw_line.js';
import drawRectangle from './draw_rectangle.js';
import drawText from './draw_text.js';

_onReady(() => {
  const mainCanvas = document.querySelector('#my-canvas');
  const mainContext = mainCanvas.getContext("2d");
  const squareDimension = 450;
  const tau = Math.PI * 2; // this number * radius gives the circumference

  const contextHeight = squareDimension;
  const contextWidth = squareDimension;
  const radius = 125;
  const halfCanvas = squareDimension / 2;
  const backgroundColor = "#EEEEEE";

  drawCircle(
    {
      context: mainContext,
      backgroundColor,
      contextWidth,
      contextHeight,
      halfCanvas,
      radius,
      tau
    }
  );

  drawLine(mainContext);
  drawRectangle(mainContext);
  drawText(mainContext);
});