//main.js
function init() {
  var canvas = document.getElementById("webgl-canvas");
  gl = canvas.getContext("webgl2");
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);
  cube = new Cube (gl);
  render();
  requestAnimationFrame(render);
}

var pi = 3.14159;
var time = 1;
function render() {
  gl.clear(gl.COLOR_BUFFER_BIT |
           gl.DEPTH_BUFFER_BIT);
  time = time + 1;
  cube.P = perspective (90, 1.0, 1, 3);
  
  ms = new MatrixStack();
  
  var V = translate (0, 0, -2);
  ms.load (V);
  
  ms.push();
  ms.rotate (time, [1,3,2]);
  cube.MV = ms.current();
  cube.render();
  ms.pop();
  requestAnimationFrame(render);
}
window.onload = init;
