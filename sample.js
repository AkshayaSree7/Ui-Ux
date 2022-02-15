
// set up global javascript variables

var canvas, gl; // canvas and webgl context

var shaderScript;
var shaderSource;
var vertexShader; // Vertex shader.  Not much happens in that shader, it just creates the vertex's to be drawn on
var fragmentShader; // this shader is where the magic happens. Fragment = pixel.  Vertex = kind of like "faces" on a 3d model.  
var buffer;