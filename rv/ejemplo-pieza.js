function Pieza(){
  THREE.Object3D.call( this );
  this.piernaIzq = new THREE.Mesh( new THREE.BoxGeometry( 1, 5, 1 ) );
  this.piernaDer = new THREE.Mesh( new THREE.BoxGeometry( 1, 5, 1 ) );
  var cuerpo = new THREE.Mesh ( new THREE.BoxGeometry( 5, 10, 5 ) );
  this.add( this.piernaIzq, this.piernaDer, cuerpo );
  this.piernaIzq.position.z = -2;
  this.piernaIzq.position.y = -2.5;
  this.piernaDer.position.z = 7;
  this.piernaDer.position.y = -2.5;
  cuerpo.position.z = 2.5;
  }
Pieza.prototype = new THREE.Object3D;
var pieza = new Pieza();
var camara = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var lienzo = document.getElementById( "ejemplo-pieza" );
var renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true} );
var escena = new THREE.Scene();
function setup() {
  escena.add( pieza );
  camara.position.z = 50;
  renderizador.setSize( 600, 600 );
 }
var p = 0.1;
function loop(){
  requestAnimationFrame( loop );
  pieza.rotateY( 0.1 );
  renderizador.render( escena, camara );
}
setTimeout( function piernita(){
  requestAnimationFrame( loop );
  pieza.piernaIzq.rotateZ( 0.1 );
}, 1000);
setTimeout( function piernota(){
  requestAnimationFrame( loop );
  pieza.piernaDer.rotateZ( 0.1 );
}, 1000);
/*function loop(){
  requestAnimationFrame( loop );
  pieza.rotateY( 0.1 );
  pieza.piernaIzq.rotateZ( 0.1 );
  pieza.piernaIzq.rotateZ( 0.1 );
  renderizador.render( escena, camara );
}*/

setup();
loop();
