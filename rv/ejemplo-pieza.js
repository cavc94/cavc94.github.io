function Pieza(){
  THREE.Object3D.call( this );
  this.piernaIzq = new THREE.Mesh( new THREE.BoxGeometry( 1, 5, 1 ) );
  this.piernaDer = new THREE.Mesh( new THREE.BoxGeometry( 1, 5, 1 ) );
  var cuerpo = new THREE.Mesh ( new THREE.BoxGeometry( 5, 10, 5 ) );
  this.add( piernaIzq, piernaDer, cuerpo );
  this.piernaIzq.position.z = -2;
  this.piernaIzq.position.y = -2.5;
  this.piernaDer.position.z = 2;
  this.piernaDer.position.y = -2.5;
  cuerpo.position.z = 2.5;
  }
Pieza.prototype = new THREE.Object3D;
var pieza = new Pieza();
function setup() {
  var escena = new THREE.Scene();
  escena.add( pieza );
  var camara = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  var lienzo = document.getElementById( "ejemplo-pieza" );
  var renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true} );
  renderizador.setSize( 600, 600 );
 }
function loop(){
  pieza.rotateY(0.1);
}
