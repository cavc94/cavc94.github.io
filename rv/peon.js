var PROTOTIPO = new Object();

PROTOTIPO.Peon = function(){
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
 
PROTOTIPO.Peon.prototype = new THREE.Geometry();

PROTOTIPO.Reina = function(){
  THREE.Geometry.call( this );
  
  var puntaForma = new THREE.SphereGeometry( 0.3, 32, 32 );
  var coronaForma = new THREE.CylinderGeometry( 0.4, 0.3, 0.35 );
  var troncoForma = new THREE.CylinderGeometry( 0.3, 0.5, 1.5 );
  var adornoForma = new THREE.TorusGeometry(0.4, 0.05, 16, 100);
  //var discoForma = new THREE.CylinderGeometry( 0.3, 0.3, 0.1 );
  var baseForma = new THREE.CylinderGeometry( 0.5, 0.6, 0.25 );
  
  puntaForma.translate( 0, 0.9875, 0 );
  coronaForma.translate( 0, 0.8125, 0 );
  adornoForma.rotateX(Math.PI/2);
  adornoForma.translate( 0, -0.75, 0 );
  //discoForma.translate( 0, 0.25, 0 );
  baseForma.translate( 0, -0.7625, 0 );
  
  var puntaMalla = new THREE.Mesh( puntaForma );
  var troncoMalla = new THREE.Mesh( troncoForma );
  var coronaMalla = new THREE.Mesh( coronaForma );
  var adornoMalla = new THREE.Mesh( adornoForma );
  //var discoMalla = new THREE.Mesh( discoForma );
  var baseMalla = new THREE.Mesh( baseForma );
  //var discoMalla = new THREE.Mesh( discoForma );
  
  this.merge( puntaMalla.geometry, puntaMalla.matrix );
  this.merge( troncoMalla.geometry, troncoMalla.matrix );
  this.merge( coronaMalla.geometry, coronaMalla.matrix );
  this.merge( adornoMalla.geometry, adornoMalla.matrix );
  //this.merge( discoMalla.geometry, discoMalla.matrix );
  this.merge( baseMalla.geometry, baseMalla.matrix );
 }
 
PROTOTIPO.Reina.prototype = new THREE.Geometry();

PROTOTIPO.setup = function() {
  //var peon = new THREE.Mesh( new PROTOTIPO.Peon(), new THREE.MeshNormalMaterial() );
  var reina = new THREE.Mesh( new PROTOTIPO.Reina(), new THREE.MeshNormalMaterial() );
  
  //peon1.position.x = -5;
  //arbol2.position.x =  5;
  
  PROTOTIPO.camara = new THREE.PerspectiveCamera();
  PROTOTIPO.camara.position.z = 10;
  
  var lienzo = document.getElementById( "peon" );
  PROTOTIPO.renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true} );
  
  PROTOTIPO.renderizador.setSize( 600, 600 );
  
  PROTOTIPO.escena = new THREE.Scene();
  //PROTOTIPO.escena.add(peon);
  PROTOTIPO.escena.add(reina);
 }

PROTOTIPO.loop = function() {
  requestAnimationFrame( PROTOTIPO.loop );
  PROTOTIPO.renderizador.render( PROTOTIPO.escena, PROTOTIPO.camara );
 }

PROTOTIPO.setup();
PROTOTIPO.loop();
