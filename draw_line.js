export default function drawLine () {
  mainContext.beginPath();
  mainContext.moveTo(0, 450);
  mainContext.lineTo(450, 0);
  mainContext.stroke();
}
