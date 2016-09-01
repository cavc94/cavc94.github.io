var troncoForma = new THREE.CylinderGeometry(0.3, 0.5, 1);
var alamborForma = new THREE.CylinderGeometry(0.5, 0.75, 0.2);
var baseForma = new THREE.CylinderGeometry(0.4, 0.4, 0.1);
//var almenaForma = new THREE.BoxGeometry(0.3, 0.1, 0.1);
var almena1 = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 8, 1, true, 0, Math.PI/4);
//var almena2 = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 8, 1, true, Math.PI/2, Math.PI/4);
//var almena3 = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 8, 1, true, 3*Math.PI/4, Math.PI/4);
//var almena4 = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 8, 1, true, Math.PI, Math.PI/4);

var almenaForma = new THREE.Geometry();
almenaForma.merge(almena1.geometry, almena1.matrix);
//almenaForma.merge(almena2.geometry, almena2.matrix);
//almenaForma.merge(almena3.geometry, almena3.matrix);
//almenaForma.merge(almena4.geometry, almena4.matrix);

troncoForma.translate(0,0.6,0);
baseForma.translate(0,1.15,0);
//almenaForma.translate(0,1.25,0.2);
almenaForma.translate(0,1.25,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var alamborMalla = new THREE.Mesh(alamborForma);
var almenaMalla = new THREE.Mesh(almenaForma);
var baseMalla = new THREE.Mesh(baseForma);

var torreForma = new THREE.Geometry();

torreForma.merge(troncoMalla.geometry, troncoMalla.matrix);
torreForma.merge(alamborMalla.geometry, alamborMalla.matrix);
torreForma.merge(almenaMalla.geometry, almenaMalla.matrix);
torreForma.merge(baseMalla.geometry, baseMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

var escena = new THREE.Scene();
escena.add( torreMalla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
