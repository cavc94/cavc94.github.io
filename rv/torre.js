var troncoForma = new THREE.CylinderGeometry(0.3, 0.5, 1);
var baseForma = new THREE.CylinderGeometry(0.5, 0.75, 0.2);
var almenaForma = new THREE.BoxGeometry(0.1, 0.07, 0.1);

troncoForma.translate(0,0.6,0);
almenaForma.translate(0,1.135,0)

var troncoMalla = new THREE.Mesh(troncoForma);
var baseMalla = new THREE.Mesh(baseForma);
var almenaMalla = new THREE.Mesh(almenaForma);

torreForma.merge(troncoMalla.geometry, troncoMalla.matrix);
torreForma.merge(baseMalla.geometry, baseMalla.matriz);
torreForma.merge(almenaMalla.geometry, almenaMalla.matriz);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

var escena = new THREE.Scene();
escena.add( torreMalla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara )
