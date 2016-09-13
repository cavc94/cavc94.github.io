var casilla = new THREE.BoxGeometry(10, 10, 10);

var Blanco = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var Negro = new THREE.MeshBasicMaterial( { color: 0x555555 } );

var casillasN = new Array();
var casillasB = new Array();
//var casillas = new Array();

for ( var i = 0; i < 32; i ++ ) {
	casillasN[i] = new THREE.Mesh( casilla, Negro );
	casillasB[i] = new THREE.Mesh( casilla, Blanco );
}

var n = 0;
var b = 0;

for ( var i = 0; i < 8; i ++ ) {
	for ( var j = 0; j < 8; j ++ ) {
		if ( i%2 == 0 ) {
			if ( j%2 == 0 ) {
				casillasN[n].position.set( i*10, j*10, 0 );
				n++;
			} else {
				casillasB[b].position.set( i*10, j*10, 0 );
				b++;
			}				
		} else {
			if ( j%2 == 0 ) {
				casillasB[b].position.set( i*10, j*10, 0 );
				b++;
			} else {
				casillasN[n].position.set( i*10, j*10, 0 );
				n++;
			}
		}
	}
}
//rotateZ

//casillasN[0].rotateX( -Math.PI/4 );
//casillasB[0].rotateX( -Math.PI/4 );
//var tablero = new Geometry();
//tablero.merge(casillaN.geometry, casillaN.matrix);
//tablero.merge(casillaB.geometry, casillaN.matrix);

var escena = new THREE.Scene();

for ( var i = 0; i < 32; i ++ ) {
	//casillasN[i].rotateX( -Math.PI/2 );
	//casillasB[i].rotateX( -Math.PI/2 );
	escena.add( casillasN[i] );
	escena.add( casillasB[i] );
}

var contornoForma = new THREE.BoxGeometry(100, 100, 10);
var contorno = new THREE.Mesh( contornoForma, Negro );
contorno.position.set( 35, 35, 0 );
escena.add( contorno );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
