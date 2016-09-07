var campoVision = 45; //grados
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );
camara.position.z = 15;

var casillaN = new THREE.Mesh( new THREE.BoxGeometry(2, 2, 2), new THREE.MeshNormalMaterial() );
//cubo.rotateY( Math.PI/4 );

//var tablero = new Geometry();
//tablero.merge(casillaN.geometry, casillaN.matrix);

var escena = new THREE.Scene();
escena.add( casillaN );

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
