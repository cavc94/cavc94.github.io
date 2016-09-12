var casilla = new THREE.BoxGeometry(10, 5, 10);

var Blanco = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var Negro = new THREE.MeshBasicMaterial( { color: 0x555555 } );

var casillasN = new Array();
var casillasB = new Array();
//var casillas = new Array();

for ( var i = 0; i < 64; i ++ ) {
	casillasN[i] = new THREE.Mesh( casilla, Negro );
	casillasB[i] = new THREE.Mesh( casilla, Blanco );
}

var n = 0;
var b = 0;

for ( var i = 0; i < 9; i ++ ) {
	for ( var j = 0; j < 9; j ++ ) {
		if ( i%2 == 0 ) {
			if ( j%2 == 0 ) {
				casillasN[n].position.set( i*10, 0, j*10 );
				n++;
			} else {
				casillasB[b].position.set( i*10, 0, j*10 );
				b++;
			}				
		} else {
			if ( j%2 == 0 ) {
				casillasB[b].position.set( i*10, 0, j*10 );
				b++;
			} else {
				casillasN[n].position.set( i*10, 0, j*10 );
				n++;
			}
		}
	}
}
//casillasN[0].rotateX( -Math.PI/4 );

//casillasB[0].rotateX( -Math.PI/4 );
//casillasB[0].position.set( 10, 0, 0 );

//var tablero = new Geometry();
//tablero.merge(casillaN.geometry, casillaN.matrix);
//tablero.merge(casillaB.geometry, casillaN.matrix);

var escena = new THREE.Scene();

for ( var i = 0; i < 64; i ++ ) {
	casillasN[i].rotateX( -Math.PI/4 );
	casillasB[i].rotateX( -Math.PI/4 );
	escena.add( casillasN[i] );
	escena.add( casillasB[i] );
}
//escena.add( casillasN[0] ); 
//escena.add( casillasB[0] );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
