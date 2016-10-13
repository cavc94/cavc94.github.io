var PROTOTIPO = new Object();

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
  //this.rotateX( Math.PI/2 );
 }
 
PROTOTIPO.TorreGeometry.prototype = new THREE.Geometry();

PROTOTIPO.Negro = function( prototipo ){
  var material = new THREE.MeshBasicMaterial( {map: prototipo} );
  PROTOTIPO.torresN = new Array();
  for( var i = 0; i < 2; i++ ){
    PROTOTIPO.torresN[i] = new THREE.Mesh( new PROTOTIPO.TorreGeometry(), material );
    PROTOTIPO.torresN[i].position.set( (i%2)*70, 70, 5 );
    PROTOTIPO.escena.add( PROTOTIPO.torresN[i] );
 }
 PROTOTIPO.peonesN = new Array();
 for( var i = 0; i < 8; i++ ){
   PROTOTIPO.peonesN[i] = new THREE.Mesh( new PROTOTIPO.PeonGeometry(), material );
   PROTOTIPO.peonesN[i].position.set( i*10, 65, 5 );
   PROTOTIPO.escena.add( PROTOTIPO.peonesN[i] );
 }
}

PROTOTIPO.Blanco = function( prototipo ){
  var material = new THREE.MeshBasicMaterial( {map: prototipo} );
  PROTOTIPO.torresB = new Array();
  for( var i = 0; i < 2; i++ ){
    PROTOTIPO.torresB[i] = new THREE.Mesh( new PROTOTIPO.TorreGeometry(), material );
    PROTOTIPO.torresB[i].position.set( (i%2)*70, 0, 5 );
    PROTOTIPO.escena.add( PROTOTIPO.torresB[i] );
  }
  PROTOTIPO.peonesB = new Array();
  for( var i = 0; i < 8; i++ ){
    PROTOTIPO.peonesB[i] = new THREE.Mesh( new PROTOTIPO.PeonGeometry(), material );
    PROTOTIPO.peonesB[i].position.set( i*10, 0, 5 );
    PROTOTIPO.escena.add( PROTOTIPO.peonesB[i] );
  }
}

PROTOTIPO.setup = function() {
  var cargador = new THREE.TextureLoader();
  cargador.load( "marmol_blanco.jpg", PROTOTIPO.Blanco );
  
  var cargador2 = new THREE.TextureLoader();
  cargador2.load( "marmol_negro.jpg", PROTOTIPO.Negro );
  
  PROTOTIPO.camara = new THREE.PerspectiveCamera();
  PROTOTIPO.camara.position.z = 50;
  
  var lienzo = document.getElementById( "ajedrez-prototipo" );
  PROTOTIPO.renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true} );
  PROTOTIPO.renderizador.setSize( 600, 600 );
  
  PROTOTIPO.escena = new THREE.Scene();
  PROTOTIPO.camara.lookAt( PROTOTIPO.escena.position );
 }

PROTOTIPO.loop = function() {
  requestAnimationFrame( PROTOTIPO.loop );
  PROTOTIPO.renderizador.render( PROTOTIPO.escena, PROTOTIPO.camara );
 }

PROTOTIPO.setup();
PROTOTIPO.loop();