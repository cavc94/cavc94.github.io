/*ILUMINACIÓN*/
var luzP1 = new THREE.PointLight( 0xffffff );
luzP1.position.x = 150;
luzP1.position.y = -75;
luzP1.position.z = 150;
luzP1.castShadow = true;

/*TORRE*/
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

var torreForma = new THREE.Geometry();

torreForma.merge(troncoMalla.geometry, troncoMalla.matrix);
torreForma.merge(alamborMalla.geometry, alamborMalla.matrix);
torreForma.merge(torusMalla.geometry, torusMalla.matrix);
torreForma.merge(adornoMalla.geometry, adornoMalla.matrix);
torreForma.merge(baseMalla.geometry, baseMalla.matrix);

torreForma.merge(almenaM1.geometry, almenaM1.matrix);
torreForma.merge(almenaM2.geometry, almenaM2.matrix);
torreForma.merge(almenaM3.geometry, almenaM3.matrix);
torreForma.merge(almenaM4.geometry, almenaM4.matrix);

torreForma.scale( 7, 7, 7);
torreForma.rotateX( Math.PI/2 );

/*TABLERO*/
var casilla = new THREE.BoxGeometry(10, 10, 5);
var bloque = new THREE.BoxGeometry(100, 10, 10);
	
/*TEXTURA*/
var TEXTURA = new Object();

TEXTURA.blanco = function( textura ){
  var material = new THREE.MeshLambertMaterial( {map: textura} );
  TEXTURA.casillasB = new Array();
  TEXTURA.torreMalla = new Array();
  for ( var i = 0; i < 32; i ++ ) {  
    if ( i < 2 ){
      TEXTURA.torreMalla[i] = new THREE.Mesh( torreForma, material );
      TEXTURA.torreMalla[i].position.set( (i%2)*70, 0, 5 );
      TEXTURA.escena.add( TEXTURA.torreMalla[i] );
    }
    TEXTURA.casillasB[i] = new THREE.Mesh( casilla, material );
    TEXTURA.casillasB[i].receiveShadow = true;
    TEXTURA.escena.add( TEXTURA.casillasB[i] );
  }
  var b = 0;
  for ( var i = 0; i < 8; i ++ ) {
	  for ( var j = 0; j < 8; j ++ ) {
		  if ( i%2 == 0 ) {
			  if ( j%2 != 0 ) {
				TEXTURA.casillasB[b].position.set( i*10, j*10, 0 );
				b++;
			}				
		} else {
			if ( j%2 == 0 ) {
				TEXTURA.casillasB[b].position.set( i*10, j*10, 0 );
				b++;
			}
		}
		}
	}
}

TEXTURA.negro = function( textura ){
  var material = new THREE.MeshLambertMaterial( {map: textura} );
  TEXTURA.casillasN = new Array();
  TEXTURA.torreMalla = new Array();
  for ( var i = 0; i < 32; i ++ ) {
    if ( i < 2 ){
      TEXTURA.torreMalla[i] = new THREE.Mesh(torreForma, material);
      TEXTURA.torreMalla[i].position.set( (i%2)*70, 70, 5 );
      TEXTURA.torreMalla[i].castShadow = true;
      TEXTURA.escena.add( TEXTURA.torreMalla[i] );
    }
    TEXTURA.casillasN[i] = new THREE.Mesh( casilla, material );
    TEXTURA.casillasN[i].receiveShadow = true;
    TEXTURA.escena.add( TEXTURA.casillasN[i] );
  }
  var n = 0;
  for ( var i = 0; i < 8; i ++ ) {
	  for ( var j = 0; j < 8; j ++ ) {
		  if ( i%2 == 0 ) {
			  if ( j%2 == 0 ) {
				  TEXTURA.casillasN[n].position.set( i*10, j*10, 0 );
				  n++;
			}				
		} else {
			if ( j%2 != 0 ) {
				TEXTURA.casillasN[n].position.set( i*10, j*10, 0 );
				n++;
			}
		}
		}
	}
}
 
TEXTURA.contorno = function( textura ) {
	var material = new THREE.MeshLambertMaterial( {map: textura} );
	TEXTURA.bordes = new Array();
	for (var i = 0; i < 4; i++ ){
		TEXTURA.bordes[i] = new THREE.Mesh( bloque, material ); 
		TEXTURA.bordes[i].receiveShadow = true;
		TEXTURA.escena.add( TEXTURA.bordes[i] );
	}
	TEXTURA.bordes[0].position.set( 35, -10, 0 );
	TEXTURA.bordes[1].position.set( 35, 80, 0 );
	TEXTURA.bordes[2].rotateZ( Math.PI/2 );
	TEXTURA.bordes[3].rotateZ( Math.PI/2 );
	TEXTURA.bordes[2].position.set( -10, 35, 0 );
	TEXTURA.bordes[3].position.set( 80, 35, 0 );
}

TEXTURA.setup = function() {
  TEXTURA.escena = new THREE.Scene(); 
  var cargador = new THREE.TextureLoader();
  cargador.load( "marmol_negro.jpg", TEXTURA.negro );
  var cargador_blanco = new THREE.TextureLoader();
  cargador_blanco.load( "marmol_blanco.jpg", TEXTURA.blanco );
  var cargador_contorno = new THREE.TextureLoader();
  cargador_contorno.load( "marmol_gris.jpg", TEXTURA.contorno );
  TEXTURA.escena.add( luzP1 );
  TEXTURA.escena.add( luzP2 );
  TEXTURA.escena.add( luzP3 );
  TEXTURA.camara = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  TEXTURA.camara.position.z = 120;
  TEXTURA.camara.lookAt( new THREE.Vector3(35,35,0) );

  var lienzo = document.getElementById( "tablero-textura" );
  TEXTURA.renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true } );
  TEXTURA.renderizador.setSize( 600, 600 );
 }

TEXTURA.loop = function (){
  requestAnimationFrame( TEXTURA.loop );  
  /*if ( TEXTURA.malla !== undefined ) {
    TEXTURA.malla.rotateX( 0.01 );
    TEXTURA.malla.rotateY( 0.01 );
    }*/
  TEXTURA.renderizador.render( TEXTURA.escena, TEXTURA.camara );
 }
 
TEXTURA.setup();
TEXTURA.loop();
