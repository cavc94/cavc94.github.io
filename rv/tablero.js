var casilla = new THREE.BoxGeometry(10, 5, 10);

var Blanco = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var Negro = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

var casillaN = new THREE.Mesh( casilla , Negro  );
casillaN.rotateX( -Math.PI/4 );

var casillaB = new THREE.Mesh( casilla, Blanco );
casillaB.rotateX( -Math.PI/4 );
casillaB.translate(10,0,0);

//var tablero = new Geometry();
//tablero.merge(casillaN.geometry, casillaN.matrix);

var escena = new THREE.Scene();
escena.add( casillaN ); 
escena.add( casillaB );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


//for ( var i = 0; i < 3; i ++ ) {
//	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
//}
