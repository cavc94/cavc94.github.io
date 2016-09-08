var Blanco = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var Negro = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

for ( var i = 0; i < 3; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}

var casillaN = new THREE.Mesh( new THREE.BoxGeometry(10, 5, 10), Negro  );
casillaN.rotateX( -Math.PI/4 );

var casillaB = new THREE.Mesh( new THREE.BoxGeometry(10, 5, 10), Blanco );
casillaB.rotateX( -Math.PI/4 );
casillaB.translate(5,0,0);

//var tablero = new Geometry();
//tablero.merge(casillaN.geometry, casillaN.matrix);

var escena = new THREE.Scene();
escena.add( casillaN, casillaB );

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
