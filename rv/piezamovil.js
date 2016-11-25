/*PEÓN*/
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
/*CONSTRUCCIÓN DEL AGENTE*/
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
/*TABLERO*/
function CasillaB( size, x, y ){
  var cargador = new THREE.TextureLoader();
  textura = cargador.load( 'marmol_blanco.jpg' );
  THREE.Mesh.call( this, new THREE.BoxGeometry( size, size, size/2 ), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.size = size;
  this.position.x = x;
  this.position.y = y;
  this.receiveShadow=true;
}
CasillaB.prototype = new THREE.Mesh();
function CasillaN( size, x, y ){
  var cargador = new THREE.TextureLoader();
  textura = cargador.load( 'marmol_negro.jpg' );
  THREE.Mesh.call( this, new THREE.BoxGeometry( size, size, size/2 ), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.size = size;
  this.position.x = x;
  this.position.y = y;
  this.receiveShadow=true;
}
CasillaN.prototype = new THREE.Mesh();
function Contorno( size, x, y ){
  var cargador = new THREE.TextureLoader();
  textura = cargador.load( 'marmol_gris.jpg' );
  THREE.Mesh.call( this, new THREE.BoxGeometry( size, size, size ), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.size = size;
  this.position.x = x;
  this.position.y = y;
  this.receiveShadow=true;
}
Contorno.prototype = new THREE.Mesh();

Environment.prototype.setMap = function( map ){
  for ( var i = 0; i < map.length; i++ ){
    for ( var j = 0; j < map.length; j++ ){
      if ( map[i][j] === "B" )
        this.add( new CasillaB( 10, -45+10*i, -45+10*j ) );
      else if ( map[i][j] === "N" )
        this.add( new CasillaN( 10, -45+10*i, -45+10*j ) );
      else if ( map[i][j] === "C" )
        this.add( new Contorno( 10, -45+10*i, -45+10*j ) );
      }
   }
 }

Environment.prototype.setMapPiece = function( map ){
  for( var i = 0; i < map.length; i++){
    for(var j = 0; j < map.length; j++){
      if( map[i][j] === "p")
        this.add( new Pieza( -45+10*i, -45+10*j ) );
    }
  }
}

function Pieza( x, y ){
  Agent.call( this, x, y );
  var cargador = new THREE.TextureLoader();
  this.castShadow = true;
  this.position.x = x;
  this.position.y = y;
  this.position.z = 5;
  textura = cargador.load( 'marmol_blanco.jpg' );
  this.actuator = new THREE.Mesh( new PROTOTIPO.Peon(), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.actuator.scale.set( 7, 7, 7 );
  this.actuator.rotateX( Math.PI/2 );
  this.actuator.castShadow = true;
  this.add( this.actuator );
  document.addEventListener("keydown", movement, false);
  }
  
Pieza.prototype = new Agent();

function movement(event) { 
  var keyboard = event.which;  
  var avance = 0.5;
  switch ( keyboard ){
    case 37:
      environment.children[100].position.x+=-avance;
    break;
    case 38:
      environment.children[100].position.y+=avance;
    break;
    case 39:
      environment.children[100].position.x+=avance;
    break;
    case 40:
      environment.children[100].position.y+=-avance;
    break;
    }
}

function setup(){
  var mapa = new Array();
  mapa[0] = "CCCCCCCCCC";
  mapa[1] = "CBNBNBNBNC";
  mapa[2] = "CNBNBNBNBC";
  mapa[3] = "CBNBNBNBNC";
  mapa[4] = "CNBNBNBNBC";
  mapa[5] = "CBNBNBNBNC";
  mapa[6] = "CNBNBNBNBC";
  mapa[7] = "CBNBNBNBNC";
  mapa[8] = "CNBNBNBNBC";
  mapa[9] = "CCCCCCCCCC";
  var pieza = new Array();
  pieza[0] = "          ";
  pieza[1] = "          ";
  pieza[2] = "          ";
  pieza[3] = "          ";
  pieza[4] = "          ";
  pieza[5] = "          ";
  pieza[6] = "          ";
  pieza[7] = " p        ";
  pieza[8] = "          ";
  pieza[9] = "          ";
  
  environment = new Environment();
  environment.setMap( mapa );
  environment.setMapPiece( pieza );
  camara = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 1000 );
  camara.position.z = 120;
  camara.position.y = -90;
  camara.lookAt( new THREE.Vector3( 0, 0, 0 ) );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  renderer.shadowMap.enabled=true;
  document.body.appendChild( renderer.domElement );
  luzPuntual=new THREE.PointLight(0xFFFFFF);
  luzPuntual.position.x = 50;
  luzPuntual.position.y = -50;
  luzPuntual.position.z = 50;
  luzPuntual.castShadow=true;
  environment.add( camara );
  environment.add( luzPuntual );
}

function SeleccionD(event){
  event.preventDefault();
  var mouse3D=new THREE.Vector3((event.clientX/window.innerWidth)*2-1,-(event.clientY/window.innerHeight)*2+1,0);     
  var raycaster=new THREE.Raycaster();                                        
  raycaster.setFromCamera(mouse3D,camara);
  seleccion=raycaster.intersectObjects(environment.children,true);
  seleccion[0].object.material.color.setHex(0xff00ff);  
  if(seleccion.length>0)
    id=seleccion[0].object.id;
  console.log(id);
}

function SeleccionU(event) {
  event.preventDefault();
  seleccion[0].object.material.color.setHex(0xffffff);  
}

function loop(){
  requestAnimationFrame( loop );
  environment.sense();
  environment.plan();
  environment.act();
  renderer.render( environment, camara );
  }
  
var environment, camara, renderer, luzpuntual;

setup();
loop();
