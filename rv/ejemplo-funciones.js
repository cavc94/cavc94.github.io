function init( p ) {
  var malla( new THREE.BoxGeometry( 1, 1, 1 ), new THREE.MeshNormalMaterial() );
  escena = new THREE.Scene();
  escena.add( malla );
  camara = new THREE.PerspectiveCamera();
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize( 700, 700 );
  document.body.appendChild( renderizador.domElement );
  }
  
var main = function( p ) {
  renderizador.render( escena, camara );
  }
