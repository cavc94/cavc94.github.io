var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 0, 0, 0 ), 
                    new THREE.Vector3( 0, 0, 1 ),
                    new THREE.Vector3( 0, 1, 0 ),
                    new THREE.Vector3( 0, 1, 1 ),
                    new THREE.Vector3( 1, 0, 0 ),
                    new THREE.Vector3( 1, 0, 1 ),
                    new THREE.Vector3( 1, 1, 0 ),
                    new THREE.Vector3( 1, 1, 1 ) );

forma.faces.push( new THREE.Face3( 0, 2, 6),
                  new THREE.Face3( 0, 6, 4),
                  new THREE.Face3( 4, 0, 1),
                  new THREE.Face3( 1, 3, 2 ),
                  new THREE.Face3( 2, 1, 5 ),
                  new THREE.Face3( 5, 4, 1 ),
                  new THREE.Face3( 5, 7, 6 ),
                  new THREE.Face3( 5, 6, 3 ),
                  new THREE.Face3( 7, 3, 5 ) );
//forma.faces.push( new THREE.Face3( 4, 6, 7 ) );
//forma.faces.push( new THREE.Face3( 7, 2, 0 ) );
//forma.faces.push( new THREE.Face3( 4, 6, 7 ) );

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );

malla.rotateX(-Math.PI/2);
malla.rotateY(Math.PI/4);
malla.rotateZ(-Math.PI/3);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
