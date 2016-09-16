/*Cámara perspectiva*/
var campoVision = 45; //grados
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 10;
var planoLejano = 1000;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );
camara.position.z = 300;

/*Creación del Tablero*/
var casilla = new THREE.BoxGeometry(10, 10, 5);
var Blanco = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var Negro = new THREE.MeshBasicMaterial( { color: 0x555555 } );

var casillasN = new Array();
var casillasB = new Array();

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

/*Creación de las Torres*/
var troncoForma = new THREE.CylinderGeometry(0.3, 0.5, 1);
var alamborForma = new THREE.CylinderGeometry(0.5, 0.75, 0.2);
var baseForma = new THREE.CylinderGeometry(0.4, 0.4, 0.1);
var torusForma = new THREE.TorusGeometry(0.5, 0.05, 16, 100);
var adornoForma = new THREE.TorusGeometry(0.3, 0.05, 16, 100);
var almenaF1 = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 8, 1, true, 0, Math.PI/4);
var almenaF2 = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 8, 1, true, Math.PI/2, Math.PI/4);
var almenaF3 = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 8, 1, true, Math.PI, Math.PI/4);
var almenaF4 = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 8, 1, true, 3*Math.PI/2, Math.PI/4);

troncoForma.translate(0,0.6,0);
baseForma.translate(0,1.15,0);
adornoForma.rotateX(Math.PI/2);
adornoForma.translate(0,1.1,0);
torusForma.rotateX(Math.PI/2);
torusForma.translate(0,0.11,0);
almenaF1.translate(0,1.2,0);
almenaF2.translate(0,1.2,0);
almenaF3.translate(0,1.2,0);
almenaF4.translate(0,1.2,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var alamborMalla = new THREE.Mesh(alamborForma);
var torusMalla = new THREE.Mesh(torusForma);
var adornoMalla = new THREE.Mesh(adornoForma);
var baseMalla = new THREE.Mesh(baseForma);

var almenaM1 = new THREE.Mesh(almenaF1);
var almenaM2 = new THREE.Mesh(almenaF2);
var almenaM3 = new THREE.Mesh(almenaF3);
var almenaM4 = new THREE.Mesh(almenaF4);

var torreForma = new Array();
var torreMalla = new Array();
var blanco = new THREE.MeshNormalMaterial( {color: 0xffffff} );
var negro = new THREE.MeshNormalMaterial( {color: 0x333333} );

for ( var i = 0; i < 4; i ++ ) {
  torreForma[i] = new THREE.Geometry();
  
  torreForma[i].merge(troncoMalla.geometry, troncoMalla.matrix);
  torreForma[i].merge(alamborMalla.geometry, alamborMalla.matrix);
  torreForma[i].merge(torusMalla.geometry, torusMalla.matrix);
  torreForma[i].merge(adornoMalla.geometry, adornoMalla.matrix);
  torreForma[i].merge(baseMalla.geometry, baseMalla.matrix);
  
  torreForma[i].merge(almenaM1.geometry, almenaM1.matrix);
  torreForma[i].merge(almenaM2.geometry, almenaM2.matrix);
  torreForma[i].merge(almenaM3.geometry, almenaM3.matrix);
  torreForma[i].merge(almenaM4.geometry, almenaM4.matrix);
  
  torreForma[i].scale( 9, 9, 9 );
  
  if ( i < 2 ){ 
    torreMalla[i] = new THREE.Mesh(torreForma[i], blanco);
    } else {
      torreMalla[i] = new THREE.Mesh(torreForma[i], negro); }
  
  torreMalla[i].rotateX(Math.PI/2);
}

torreMalla[0].position.set( 0, 0, 5 );
torreMalla[1].position.set( 70, 0, 5 );
torreMalla[2].position.set( 0, 70, 5 );
torreMalla[3].position.set( 70, 70, 5 );

/*Añadir a Escena*/
var escena = new THREE.Scene();
for ( var i = 0; i < 32; i ++ ) {
	//casillasN[i].rotateX( -Math.PI/2 );
	//casillasB[i].rotateX( -Math.PI/2 );
	escena.add( casillasN[i] );
	escena.add( casillasB[i] );
	if ( i < 4 ) {
		escena.add( contornos[i] );
		escena.add( torreMalla[i] );
	}
}
//escena.add( Tablero );

/*Renderizador*/
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
