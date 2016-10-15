var luzP1 = new THREE.PointLight( 0xffffff );
luzP1.position.x = -35;
luzP1.position.y = 100;
luzP1.position.z = 120;
luzP1.castShadow = true;

var PROTOTIPO = new Object();

PROTOTIPO.CasillaGeometry = function(){
  THREE.Geometry.call( this );
  var casillaForma = new THREE.BoxGeometry(10, 10, 5);
  var casillaMalla = new THREE.Mesh( casillaForma );
  this.merge( casillaMalla.geometry, casillaMalla.matrix );
}

PROTOTIPO.CasillaGeometry.prototype = new THREE.Geometry();

PROTOTIPO.ContornoGeometry = function(){
  THREE.Geometry.call( this );
  
  var bloqueForma = new THREE.BoxGeometry(100, 10, 10);
  var bloqueMalla = new THREE.Mesh( bloqueForma );
  //this.merge( bloqueMalla.geometry, bloqueMalla.matrix );
  var bordes = new Array();
  for (var i = 0; i < 4; i++ ){
	bordes[i] = new THREE.Mesh( bloque, material ); 
	bordes[i].receiveShadow = true;
  }
  bordes[0].position.set( 35, -10, 0 );
  bordes[1].position.set( 35, 80, 0 );
  bordes[2].rotateZ( Math.PI/2 );
  bordes[3].rotateZ( Math.PI/2 );
  bordes[2].position.set( -10, 35, 0 );
  bordes[3].position.set( 80, 35, 0 );	
  for (var i = 0; i < 4; i++ ){
	  this.merge( bordes[i].geometry, bordes[i].matrix )
  }
}

PROTOTIPO.ContornoGeometry.prototype = new THREE.Geometry();

PROTOTIPO.PeonGeometry = function(){
  THREE.Geometry.call( this );
  
  var cabezaForma = new THREE.SphereGeometry( 0.3, 32, 32 );
  var troncoForma = new THREE.CylinderGeometry( 0.1, 0.3, 0.5 );
  var adornoForma = new THREE.TorusGeometry(0.3, 0.05, 16, 100);
  var discoForma = new THREE.CylinderGeometry( 0.3, 0.3, 0.1 );
  var baseForma = new THREE.CylinderGeometry( 0.3, 0.3, 0.125 );
  
  cabezaForma.translate( 0, 0.5, 0 );
  adornoForma.rotateX(Math.PI/2);
  adornoForma.translate( 0, -0.25, 0 );
  discoForma.translate( 0, 0.25, 0 );
  baseForma.translate( 0, -0.3125, 0 );
  
  var troncoMalla = new THREE.Mesh( troncoForma );
  var cabezaMalla = new THREE.Mesh( cabezaForma );
  var adornoMalla = new THREE.Mesh( adornoForma );
  var discoMalla = new THREE.Mesh( discoForma );
  var baseMalla = new THREE.Mesh( baseForma );
  
  this.merge( troncoMalla.geometry, troncoMalla.matrix );
  this.merge( cabezaMalla.geometry, cabezaMalla.matrix );
  this.merge( adornoMalla.geometry, adornoMalla.matrix );
  this.merge( discoMalla.geometry, discoMalla.matrix );
  this.merge( baseMalla.geometry, baseMalla.matrix );
  
  this.scale( 7, 7, 7);
  this.rotateX( Math.PI/2 );
 }
 
PROTOTIPO.PeonGeometry.prototype = new THREE.Geometry();

PROTOTIPO.ReinaGeometry = function(){
  THREE.Geometry.call( this );
  
  var puntaForma = new THREE.SphereGeometry( 0.1, 32, 32 );
  var esferaForma = new THREE.SphereGeometry( 0.25, 32, 32 );
  var coronaForma = new THREE.CylinderGeometry( 0.4, 0.3, 0.35 );
  var troncoForma = new THREE.CylinderGeometry( 0.3, 0.3, 0.75 );
  var cuerpoForma = new THREE.CylinderGeometry( 0.3, 0.5, 0.75 );
  var adornoForma = new THREE.TorusGeometry(0.3, 0.05, 16, 100);
  var baseForma = new THREE.TorusGeometry( 0.5, 0.08, 16, 100 );
  var pieForma = new THREE.SphereGeometry(0.6, 32, 32, 0, Math.PI*2, 0, Math.PI/2);
  
  puntaForma.translate( 0, 1.3, 0 );
  esferaForma.translate( 0, 0.9875, 0 );
  coronaForma.translate( 0, 0.8125, 0 );
  adornoForma.rotateX(Math.PI/2);
  adornoForma.translate( 0, 0.7, 0 );
  troncoForma.translate( 0, 0.375, 0 );
  cuerpoForma.translate( 0, -0.375, 0 );
  baseForma.rotateX(Math.PI/2);
  baseForma.translate( 0, -0.8125, 0 );
  pieForma.translate( 0, -1.175, 0 );
  
  var puntaMalla = new THREE.Mesh( puntaForma );
  var esferaMalla = new THREE.Mesh( esferaForma );
  var troncoMalla = new THREE.Mesh( troncoForma );
  var cuerpoMalla = new THREE.Mesh( cuerpoForma );
  var coronaMalla = new THREE.Mesh( coronaForma );
  var adornoMalla = new THREE.Mesh( adornoForma );
  var baseMalla = new THREE.Mesh( baseForma );
  var pieMalla = new THREE.Mesh( pieForma );
  
  
  this.merge( puntaMalla.geometry, puntaMalla.matrix );
  this.merge( esferaMalla.geometry, esferaMalla.matrix );
  this.merge( troncoMalla.geometry, troncoMalla.matrix );
  this.merge( cuerpoMalla.geometry, cuerpoMalla.matrix );
  this.merge( coronaMalla.geometry, coronaMalla.matrix );
  this.merge( adornoMalla.geometry, adornoMalla.matrix );
  this.merge( baseMalla.geometry, baseMalla.matrix );
  this.merge( pieMalla.geometry, pieMalla.matrix );
  this.translate( 0, 1, 0 );
  this.scale( 7, 7, 7);
  this.rotateX( Math.PI/2 );
 }
 
PROTOTIPO.ReinaGeometry.prototype = new THREE.Geometry();

PROTOTIPO.TorreGeometry = function(){
  THREE.Geometry.call( this );
  
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
  
  this.merge(troncoMalla.geometry, troncoMalla.matrix);
  this.merge(alamborMalla.geometry, alamborMalla.matrix);
  this.merge(torusMalla.geometry, torusMalla.matrix);
  this.merge(adornoMalla.geometry, adornoMalla.matrix);
  this.merge(baseMalla.geometry, baseMalla.matrix);

  this.merge(almenaM1.geometry, almenaM1.matrix);
  this.merge(almenaM2.geometry, almenaM2.matrix);
  this.merge(almenaM3.geometry, almenaM3.matrix);
  this.merge(almenaM4.geometry, almenaM4.matrix);
  
  this.scale( 7, 7, 7);
  this.rotateX( Math.PI/2 );
 }
 
PROTOTIPO.TorreGeometry.prototype = new THREE.Geometry();

PROTOTIPO.Negro = function( prototipo ){
  var material = new THREE.MeshLambertcMaterial( {map: prototipo} );
  PROTOTIPO.torresN = new Array();
  PROTOTIPO.peonesN = new Array();
  PROTOTIPO.casillasN = new Array();
  for ( var i = 0; i < 32; i ++ ) {  
    if ( i < 2 ){
      PROTOTIPO.torresN[i] = new THREE.Mesh( new PROTOTIPO.TorreGeometry(), material );
      PROTOTIPO.torresN[i].position.set( (i%2)*70, 70, 5 );
      PROTOTIPO.torresN[i].castShadow = true;
      PROTOTIPO.escena.add( PROTOTIPO.torresN[i] );
    }
    if ( i < 8 ){
      PROTOTIPO.peonesN[i] = new THREE.Mesh( new PROTOTIPO.PeonGeometry(), material );
      PROTOTIPO.peonesN[i].position.set( i*10, 60, 5 );
      PROTOTIPO.peonesN[i].castShadow = true;
      PROTOTIPO.escena.add( PROTOTIPO.peonesN[i] );
    }
    PROTOTIPO.casillasN[i] = new THREE.Mesh( new PROTOTIPO.CasillaGeometry(), material );
    PROTOTIPO.casillasN[i].receiveShadow = true;
    PROTOTIPO.escena.add( PROTOTIPO.casillasN[i] );
  }
  var b = 0;
  for ( var i = 0; i < 8; i ++ ) {
	  for ( var j = 0; j < 8; j ++ ) {
		  if ( i%2 == 0 ) {
			  if ( j%2 == 0 ) {
				PROTOTIPO.casillasN[b].position.set( i*10, j*10, 0 );
				b++;
			}				
		} else {
			if ( j%2 != 0 ) {
				PROTOTIPO.casillasN[b].position.set( i*10, j*10, 0 );
				b++;
			}
		}
	}
  }
  PROTOTIPO.ReinaN = new THREE.Mesh( new PROTOTIPO.ReinaGeometry(), material );
  PROTOTIPO.ReinaN.castShadow = true;
  PROTOTIPO.ReinaN.position.set( 40, 70, 5 );
  PROTOTIPO.escena.add( PROTOTIPO.ReinaN );
}

PROTOTIPO.Blanco = function( prototipo ){
  var material = new THREE.MeshLambertMaterial( {map: prototipo} );
  PROTOTIPO.torresB = new Array();
  PROTOTIPO.peonesB = new Array();
  PROTOTIPO.casillasB = new Array();
  for ( var i = 0; i < 32; i ++ ) {  
    if ( i < 2 ){
      PROTOTIPO.torresB[i] = new THREE.Mesh( new PROTOTIPO.TorreGeometry(), material );
      PROTOTIPO.torresB[i].position.set( (i%2)*70, 0, 5 );
      PROTOTIPO.torresB[i].castShadow = true;
      PROTOTIPO.escena.add( PROTOTIPO.torresB[i] );
    }
    if ( i < 8 ){
      PROTOTIPO.peonesB[i] = new THREE.Mesh( new PROTOTIPO.PeonGeometry(), material );
      PROTOTIPO.peonesB[i].position.set( i*10, 10, 5 );
      PROTOTIPO.peonesB[i].castShadow = true;
      PROTOTIPO.escena.add( PROTOTIPO.peonesB[i] );
    }
    PROTOTIPO.casillasB[i] = new THREE.Mesh( new PROTOTIPO.CasillaGeometry(), material );
    PROTOTIPO.casillasB[i].receiveShadow = true;
    PROTOTIPO.escena.add( PROTOTIPO.casillasB[i] );
  }
  var b = 0;
  for ( var i = 0; i < 8; i ++ ) {
	  for ( var j = 0; j < 8; j ++ ) {
		  if ( i%2 == 0 ) {
			  if ( j%2 != 0 ) {
				PROTOTIPO.casillasB[b].position.set( i*10, j*10, 0 );
				b++;
			}				
		} else {
			if ( j%2 == 0 ) {
				PROTOTIPO.casillasB[b].position.set( i*10, j*10, 0 );
				b++;
			}
		}
	}	
  }
  PROTOTIPO.ReinaB = new THREE.Mesh( new PROTOTIPO.ReinaGeometry(), material );
  PROTOTIPO.ReinaB.castShadow = true;
  PROTOTIPO.ReinaB.position.set( 40, 0, 5 );
  PROTOTIPO.escena.add( PROTOTIPO.ReinaB );
}

PROTOTIPO.Gris= function( prototipo ){
  var material = new THREE.MeshLambertMaterial( {map: prototipo} );
  PROTOTIPO.Contorno = new THREE.Mesh( new PROTOTIPO.ContornoGeometry(), material );
  PROTOTIPO.Contorno.castShadow = true;
  PROTOTIPO.escena.add( PROTOTIPO.Contorno );
}

PROTOTIPO.setup = function() {
  var cargador = new THREE.TextureLoader();
  cargador.load( "marmol_blanco.jpg", PROTOTIPO.Blanco );
  
  var cargador2 = new THREE.TextureLoader();
  cargador2.load( "marmol_negro.jpg", PROTOTIPO.Negro );
  
  var cargador3 = new THREE.TextureLoader();
  cargador3.load( "marmol_gris.jpg", PROTOTIPO.Gris);
  
  PROTOTIPO.escena = new THREE.Scene();
  PROTOTIPO.escena.add( luzP1 );
  PROTOTIPO.camara = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  PROTOTIPO.camara.position.z = 100;
  PROTOTIPO.camara.position.y = -100;
  PROTOTIPO.camara.lookAt( new THREE.Vector3(0,100,0) );
  
  var lienzo = document.getElementById( "ajedrez-prototipo" );
  PROTOTIPO.renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true} );
  PROTOTIPO.renderizador.setSize( 600, 600 );
 }

PROTOTIPO.loop = function() {
  requestAnimationFrame( PROTOTIPO.loop );
  PROTOTIPO.renderizador.render( PROTOTIPO.escena, PROTOTIPO.camara );
 }

PROTOTIPO.setup();
PROTOTIPO.loop();
