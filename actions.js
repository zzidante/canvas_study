console.log('actions loaded!')

import drawCircle from './draw_circle.js';
import drawLine from './draw_line.js';
import drawRectangle from './draw_rectangle.js';
import drawText from './draw_text.js';

_onReady(() => {
  drawCircle();
  drawLine();
  drawRectangle();
  drawText();
  }
);