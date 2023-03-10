//Cube.js
function Cube (gl, vertexShaderId, fragmentShaderId) {
  
  var vertShdr = vertexShaderId || "Cube-vertex-shader";
  var fragShdr = fragmentShaderId || "Cube-fragment-shader";
  
  this.program = initShaders (gl, vertShdr, fragShdr);
  
  if (this.program < 0) {
    alert ("Error: Cube shader pipeline failed to compile\n\n" +
           "\tvertex shader id: \t" + vertShdr + "\n" +
           "\tfragment shader id: \t" + fragShdr + "\n");
    return;
  }
  uniforms = {
    MV : gl.getUniformLocation(this.program, "MV"),
    P : gl.getUniformLocation(this.program, "P")
  };
  this.P = mat4();
  this.MV = mat4();
  var positions = [ 0.5, 0.5, 0.5,   //vertex 0
               0.5, 0.5, -0.5,   //vertex 1
               -0.5, 0.5, -0.5,  //vertex 2
               -0.5, 0.5, 0.5,   //vertex 3
               -0.5, -0.5, 0.5,  //vertex 4
               -0.5, -0.5, -0.5, //vertex 5
               0.5, -0.5, 0.5,   //vertex 6
               0.5, -0.5, -0.5]; //vertex 7
  var indices = [ 0, 1, 3, 2, 4, 5, 6, 7, 0, 1, 2, 7, 5, 6, 4, 0, 3];
  const count = indices.length;
  let aPosition = new Attribute (gl, this.program, positions, "aPosition", 3, gl.FLOAT);
  indices = new Indices (gl, indices);
  this.render = function () {
    gl.uniformMatrix4fv(uniforms.MV, false, flatten(this.MV));
    gl.uniformMatrix4fv(uniforms.P, false, flatten(this.P));
    gl.useProgram (this.program);
    aPosition.enable();
    indices.enable();
    gl.drawElements (gl.TRIANGLE_STRIP, count, indices.type, 0);
    aPosition.disable();
    indices.disable();
  }
};
