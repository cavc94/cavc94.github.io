var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
var forma = new THREE.SphereGeometry( 10, 32, 32 );
var material = new THREE.MeshNormalMaterial();
var esfera = new THREE.Mesh( forma, material );
esfera.rotateX(-Math.PI/4);
esfera.rotateY(Math.PI/4);
var forma1 = new THREE.CylinderGeometry( 0.5, 0.5, 1, 32 );
var cilindro = new THREE.Mesh( forma1, material );
cilindro.rotateX(-Math.PI/4);
cilindro.rotateY(Math.PI/4);
cilindro.position.set( 2, 2, 0 );
escena.add( cilindro, esfera );
renderizador.render( escena, camara );
