var PROTOTIPO = new Object();

PROTOTIPO.Peon = function(){
  THREE.Geometry.call( this );
  
  var cabezaForma = new THREE.SphereGeometry( 0.3, 32, 32 );
  var troncoForma = new THREE.CylinderGeometry( 0.1, 0.3, 0.5 );
  cabezaForma.translate( 0, 0.75, 0 );
  
  var troncoMalla = new THREE.Mesh( troncoForma );
  var cabezaMalla = new THREE.Mesh( cabezaForma );
  
  this.merge( troncoMalla.geometry, troncoMalla.matrix );
  this.merge( cabezaMalla.geometry, cabezaMalla.matrix );
 }
 
PROTOTIPO.Peon.prototype = new THREE.Geometry();

PROTOTIPO.setup = function() {
  var peon1 = new THREE.Mesh( new PROTOTIPO.Peon(), new THREE.MeshNormalMaterial() );
  //var arbol2 = new THREE.Mesh( new PROTOTIPO.ArbolGeometry(), new THREE.MeshNormalMaterial() );
  
  //peon1.position.x = -5;
  //arbol2.position.x =  5;
  
  PROTOTIPO.camara = new THREE.PerspectiveCamera();
  PROTOTIPO.camara.position.z = 20;
  
  var lienzo = document.getElementById( "peon" );
  PROTOTIPO.renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true} );
  
  PROTOTIPO.renderizador.setSize( 600, 600 );
  
  PROTOTIPO.escena = new THREE.Scene();
  PROTOTIPO.escena.add(peon1);
  //PROTOTIPO.escena.add(arbol2);
 }

PROTOTIPO.loop = function() {
  requestAnimationFrame( PROTOTIPO.loop );
  PROTOTIPO.renderizador.render( PROTOTIPO.escena, PROTOTIPO.camara );
 }

PROTOTIPO.setup();
PROTOTIPO.loop();
