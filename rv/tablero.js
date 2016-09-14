var campoVision = 45; //grados
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );
camara.position.z = 300;

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

//CONTORNO

var contorno = new THREE.BoxGeometry(100, 10, 10);
var Gris = new THREE.MeshBasicMaterial( { color: 0x333333 } );
var contornos = new Array();

for ( var i = 0; i < 4; i ++ ) {
	contornos[i] = new THREE.Mesh( contorno, Gris );
}

contornos[0].position.set( 35, -10, 0 );
contornos[1].position.set( 35, 80, 0 );
contornos[2].rotateZ( Math.PI/2 );
contornos[3].rotateZ( Math.PI/2 );
contornos[2].position.set( -10, 35, 0 );
contornos[3].position.set( 80, 35, 0 );

var tablero = new THREE.Geometry();

for ( var i = 0; i < 32; i ++ ) {
	tablero.merge( casillasN[i].geometry, casillasN[i].matrix );
	tablero.merge( casillasB[i].geometry, casillasB[i].matrix );
	if ( i < 4 ) {
		tablero.merge( contornos[i].geometry, contornos[i].matrix );}
}
/*var material = new THREE.MeshNormalMaterial();
var Tablero = new THREE.Mesh( tablero, material );*/

var escena = new THREE.Scene();
for ( var i = 0; i < 32; i ++ ) {
	//casillasN[i].rotateX( -Math.PI/2 );
	//casillasB[i].rotateX( -Math.PI/2 );
	escena.add( casillasN[i] );
	escena.add( casillasB[i] );
	if ( i < 4 ) {
		escena.add( contornos[i] );}
}
//escena.add( Tablero );

/*var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;*/

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
