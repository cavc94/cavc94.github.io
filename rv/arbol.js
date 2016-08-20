var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 10;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
var forma = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial();
var cubo = new THREE.Mesh( forma, material );
cubo.rotateX(-Math.PI/4);
cubo.rotateY(Math.PI/4);

var forma1 = new THREE.CylinderGeometry( 0.5, 0.5, 5, 32 );
var cilindro = new THREE.Mesh( forma1, material );
escena.add( cubo, cilindro );
renderizador.render( escena, camara );
