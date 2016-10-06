var PROTOTIPO = new Object();
//var torreForma = new THREE.Geometry();
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

PROTOTIPO.retrollamada = function( prototipo ){
  var material = new THREE.MeshLambertcMaterial( {map: textura} );
  PROTOTIPO.torre1 = new THREE.Mesh( new PROTOTIPO.TorreGeometry(), material );
  PROTOTIPO.torre1.position.x = -10
  PROTOTIPO.escena.add( PROTOTIPO.torre1 );
 }

PROTOTIPO.setup = function() {
  //var torre1 = new THREE.Mesh( new PROTOTIPO.TorreGeometry(), new THREE.MeshNormalMaterial() );
  var torre2 = new THREE.Mesh( new PROTOTIPO.TorreGeometry(), new THREE.MeshNormalMaterial() );
  
  //torre1.position.x = -10;
  torre2.position.x =  10;
  
  var cargador = new THREE.TextureLoader();
  cargador.load( "marmol_blanco.jpg", PROTOTIPO.retrollamada );
  
  PROTOTIPO.camara = new THREE.PerspectiveCamera();
  PROTOTIPO.camara.position.z = 50;
  
  var lienzo = document.getElementById( "torre-prototipo" );
  PROTOTIPO.renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true} );
  
  PROTOTIPO.renderizador.setSize( 600, 600 );
  
  PROTOTIPO.escena = new THREE.Scene();
  //PROTOTIPO.escena.add(torre1);
  PROTOTIPO.escena.add(torre2);
 }

PROTOTIPO.loop = function() {
  requestAnimationFrame( PROTOTIPO.loop );
  PROTOTIPO.renderizador.render( PROTOTIPO.escena, PROTOTIPO.camara );
 }

PROTOTIPO.setup();
PROTOTIPO.loop();
