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
///////////////
function Agent( x=0, y=0 ){
  THREE.Object3D.call( this );
  this.position.x = x;
  this.position.y = y;
  }

Agent.prototype = new THREE.Object3D();

Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};

function Environment(){
  THREE.Scene.call( this );
  }

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function() {
  for ( var i = 0; i < this.children.length; i++ ){
    if ( this.children[i].sense !== undefined )
      this.children[i].sense( this );
   }
}

Environment.prototype.plan = function(){
  for ( var i = 0; i < this.children.length; i++ ){
    if ( this.children[i].plan !== undefined )
      this.children[i].plan( this );
   }
}

Environment.prototype.act = function(){
  for ( var i = 0; i < this.children.length; i++ ){
    if ( this.children[i].act !== undefined )
      this.children[i].act( this );
   }
}

function Pieza( r, x = 0, y = 0 ){
  Agent.call( this, x, y )
  this.add( new THREE.Mesh( new PROTOTIPO.Peon(), new THREE.MeshNormalMaterial() ) );
  this.step = 0.1;
  this.colision = 0;
  this.radius = r;
  this.sensor = new THREE.Raycaster( this.position, new THREE.Vector3( 1, 0, 0 ) );
  }
  
Pieza.prototype = new Agent();
Pieza.prototype.sense = function( environment ){
  this.sensor.set( this.position, new THREE.Vector3( 1, 0, 0 ) );
  var obstaculo1 = this.sensor.intersectObjects( environment.children, true);
  this.sensor.set( this.position, new THREE.Vector3( -1, 0, 0 ) );
  var obstaculo2 = this.sensor.intersectObjects( environment.children, true);
  if ( (obstaculo1.length>0 && (obstaculo1[0].distance<=this.radius) ) || (obstaculo2.length>0 && (obstaculo2[0].distance<=this.radius)) )
    this.colision = 1;
  else
    this.colision = 0;
};

document.addEventListener("keydown", movement);

function movement(environment) { 
  var keyboard = environment.which;  
  if( keyboard == 39 ) 
    Pieza.step += Pieza.step;
  else if ( keyboard == 37 )
    Pieza.step -= Pieza.step;
}

Pieza.prototype.act = function( environment ) {
  if( this.colision === 1 )
    this.step = -this.step;
  this.position.x = this.step;
};

function Pared( size, x = 0, y = 0 ){
  THREE.Object3D.call( this, x, y );
  this.add( new THREE.Mesh( new THREE.BoxGeometry( size, size, size ), new THREE.MeshNormalMaterial() ) ) ;
  this.size = size;
  this.position.x = x;
  this.position.y = y;
 }
 
 Pared.prototype = new THREE.Object3D();
 
 function setup(){
  entorno = new Environment();
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 30;
  entorno.add( new Pared( 1, 7, 0 ) );
  entorno.add( new Pared( 1, -7, 0 ) );
  entorno.add( new Pared( 1, 7, 1 ) );
  entorno.add( new Pared( 1, -7, 1 ) );
  entorno.add( new Pared( 1, 7, -1 ) );
  entorno.add( new Pared( 1, -7, -1 ) );
  entorno.add( new Pieza( 0.5 ) );
  entorno.add( camara );
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild( renderer.domElement ).innerHTML = Pieza.step;
}

function loop(){
  requestAnimationFrame( loop );
  entorno.sense();
  entorno.plan();
  entorno.act();
  renderer.render( entorno, camara );
  }

setup();
loop();
