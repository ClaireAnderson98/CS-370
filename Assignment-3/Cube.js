//Cube.js
function Cube (gl, vertexShaderId, fragmentShaderId) {
  const vertShdr = vertexShaderId || "Cube-vertex-shader";
  const fragShdr = fragmentShaderId || "Cube-fragment-shader";
  const shaderProgram = initShaders (gl, vertShdr, fragShdr);
  if (shaderProgram < 0) {
    alert ("Error: Cube shader pipeline failed to compile\n\n" +
           "\tvertex shader id: \t" + vertShdr + "\n" +
           "\tfragment shader id: \t" + fragShdr + "\n");
    return;
  }
  positions = [ 0.5, 0.5, 0.5,   //vertex 0
               0.5, 0.5, -0.5,   //vertex 1
               -0.5, 0.5, -0.5,  //vertex 2
               -0.5, 0.5, 0.5,   //vertex 3
               -0.5, -0.5, 0.5,  //vertex 4
               -0.5, -0.5, -0.5, //vertex 5
               0.5, -0.5, 0.5,   //vertex 6
               0.5, -0.5, -0.5]; //vertex 7
  indices = [ 0, 1, 3, 2, 4, 5, 6, 7, 0, 1, 2, 7, 5, 6, 4, 0, 3];
  const count = indices.length;
  aPosition = new Attribute (gl, shaderProgram, positions, "aPosition", 3, gl.FLOAT);
  indices = new Indices (gl, indices);
  this.render = function () {
    gl.useProgram (shaderProgram);
    aPosition.enable();
    indices.enable();
    gl.drawElements (gl.TRIANGLE_STRIP, count, indices.type, 0);
    aPosition.disable();
    indices.disable();
  }
};
