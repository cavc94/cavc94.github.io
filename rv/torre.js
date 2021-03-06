var troncoForma = new THREE.CylinderGeometry(0.3, 0.5, 1);
var alamborForma = new THREE.CylinderGeometry(0.5, 0.75, 0.2);
var baseForma = new THREE.CylinderGeometry(0.4, 0.4, 0.1);
var torusForma = new THREE.TorusGeometry(0.5, 0.05, 16, 100);
var adornoForma = new THREE.TorusGeometry(0.3, 0.05, 16, 100);
//var almenaForma = new THREE.BoxGeometry(0.3, 0.1, 0.1);
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
//almenaForma.translate(0,1.25,0.2);
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

torreForma.scale( 10, 10, 10);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

torreMalla.rotateY(Math.PI/3); 
//torreMalla.rotateX(Math.PI/2);
//torreMalla.position.set(0,0,0);

var escena = new THREE.Scene();
escena.add( torreMalla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
