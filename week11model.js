function init() {
	 scene = new THREE.Scene();
	 var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
	 renderer = new THREE.WebGLRenderer({antialias: true});
	 renderer.setSize(WIDTH, HEIGHT);
	 document.body.appendChild(renderer.domElement);
	 camera = new THREE.PerspectiveCamera(45, WIDTH/ HEIGHT, 0.1,
	20000);
	 camera.position.set(0, 6, 0);
	 scene.add(camera);
	window.addEventListener('resize', function() {
	 var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
	 renderer.setSize(WIDTH, HEIGHT);
	 camera.aspect = WIDTH / HEIGHT;
	 camera.updateProjectMatrix();
	 });
	 renderer.setClearColor(0x333F47, 1);
	 var light = new THREE.PointLight(0xffffff);
	 light.position.set(-100, 200, 100);
	 scene.add(light);

	 const texture = new THREE.TextureLoader().load( 'https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQxOS1taW50eS0wMS1sZWFmLmpwZw.jpg' );
	 const model_loader = new THREE.OBJLoader().load('https://github.com/mrdoob/three.js/blob/dev/examples/models/obj/tree.obj');

	 var cylgeometry = new THREE.CylinderGeometry(3, 3, 7, 7);
	 var cylmaterial = new THREE.MeshLambertMaterial( { map: texture } );
	 var cylmesh = new THREE.Mesh(cylgeometry, cylmaterial);
	 cylmesh.position.set(0.9, -5, -6);
	 scene.add(cylmesh);
	 controls = new THREE.OrbitControls(camera,renderer.domElement);

	 var lightTwo=new THREE.PointLight(0xfffff, 0.5);
	scene.add(lightTwo);

}

function animate(){
	controls.update();
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}