window._onReady = function(code) {
  document.addEventListener('DOMContentLoaded', function() {
    // Bad practice but just to get Canvas study done
    window.mainCanvas = document.querySelector('#my-canvas');
    window.mainContext = mainCanvas.getContext("2d");
    window.squareDimension = 450;
    window.tau = Math.PI * 2; // this number * radius gives the circumference

    window.contextHeight = squareDimension;
    window.contextWidth = squareDimension;
    window.radius = 125;
    window.halfCanvas = squareDimension / 2;
    window.backgroundColor = "#EEEEEE";

    code();
  })
}
// fake and simple onReady fn