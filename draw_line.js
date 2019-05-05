export default function drawLine (context) {
  context.beginPath();
  context.moveTo(0, 450);
  context.lineTo(450, 0);
  context.stroke();
}
