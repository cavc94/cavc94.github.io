var casilla = new THREE.BoxGeometry(10, 5, 10);

var Blanco = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var Negro = new THREE.MeshBasicMaterial( { color: 0x555555 } );

var casillasN = new Array();
var casillasB = new Array();
//var casillas = new Array();

for ( var i = 0; i < 32; i ++ ) {
	casillasN[i] = new THREE.Mesh( casilla , Negro  );
}

for ( var i = 0; i < 32; i ++ ) {
	casillasB[i] = new THREE.Mesh( casilla , Blanco  );
}

var n = 0;
var b = 0;

for ( var i = 0; i < 9; i ++ ) {
	//for ( var j = 0; j < 9; j ++ ) {
		if ( i%2 = 0 ) {
			casillasN[n].position.set( i*10, 0, 0 );
			n ++;
		} else {
			casillasB[b].positon.set( i*10, 0, 0 );
			b ++;
		}
}

//casillasN[0].rotateX( -Math.PI/4 );

//casillasB[0].rotateX( -Math.PI/4 );
//casillasB[0].position.set( 10, 0, 0 );

//var tablero = new Geometry();
//tablero.merge(casillaN.geometry, casillaN.matrix);
//tablero.merge(casillaB.geometry, casillaN.matrix);

var escena = new THREE.Scene();

for ( var i = 0; i < 4; i ++ ) {
	escena.add( casillasN[i] );
	escena.add( casillasB[i] );
}
//escena.add( casillasN[0] ); 
//escena.add( casillasB[0] );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
