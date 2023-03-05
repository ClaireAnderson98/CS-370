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

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT |
           gl.DEPTH_BUFFER_BIT);
  cube.MV = rotateX(1);
  cube.P = perspective (90, 1.0, 1, 3);
  cube.MV = translate(0, 0, 2);
  cube.render();
  requestAnimationFrame(render);
}
window.onload = init;
