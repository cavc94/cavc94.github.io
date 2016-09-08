var casilla = new THREE.BoxGeometry(10, 5, 10);

var Blanco = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var Negro = new THREE.MeshBasicMaterial( { color: 0x555555 } );

var casillas = new Array();

for ( var i = 0; i < 33; i ++ ) {
	casillasN[i] = new THREE.Mesh( casilla , Negro  );
}

for ( var i = 0; i < 33; i ++ ) {
	casillasB[i] = new THREE.Mesh( casilla , Blanco  );
}

//var casillasN = new THREE.Mesh( casilla , Negro  );
casillasN[0].rotateX( -Math.PI/4 );

//var casillaB = new THREE.Mesh( casilla, Blanco );
casillasB[0].rotateX( -Math.PI/4 );
casillasB[0].position.set( 10, 0, 0 );

//var tablero = new Geometry();
//tablero.merge(casillaN.geometry, casillaN.matrix);
//tablero.merge(casillaB.geometry, casillaN.matrix);

var escena = new THREE.Scene();
escena.add( casillasN[0] ); 
escena.add( casillasB[0] );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


