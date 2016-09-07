var campoVision = 45; //grados
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );
camara.position.z = 15;

//for ( var i = 0; i < 3; i ++ ) {
//	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
//}

var Blanco = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var Negro = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

var casillaN = new THREE.Mesh( new THREE.BoxGeometry(2, 1, 2), Negro  );
casillaN.rotateX( -Math.PI/4 );

var casillaB = new THREE.Mesh( new THREE.BoxGeometry(2, 1, 2), Blanco );
casillaB.rotateX( -Math.PI/4 );
casillaB.translate(1,0,0);

//var tablero = new Geometry();
//tablero.merge(casillaN.geometry, casillaN.matrix);

var escena = new THREE.Scene();
escena.add( casillaN, casillaB );

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
