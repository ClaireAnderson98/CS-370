//main.js

import * as THREE from './three.module.js';
import * as OrbitCamera from './OrbitControls.js';
//import * as THREE from "https://unpkg.com/three@0.151.3/build/three.module.js";
//import * as OrbitControls from "https://unpkg.com/three@0.151.3/examples/jsm/controls/OrbitControls.js";

//creation of the scene and perspective camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 1, 500);

//creation of the renderer, the window, and the shadow map
const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);
renderer.shadowMap.enabled = true;

//creation of the texture loader and background
const loader = new THREE.TextureLoader();
const sky = loader.load ('textures/milkyway.jpg');
scene.background = sky;

const controls = new OrbitCamera.OrbitControls (camera, renderer.domElement);
controls.maxDistance = 250;
controls.minDistance = 13;
controls.enablePan = false;

var quarter = 1.5708;

//---- SUN ----//

var sunSize = 10;
var sunTexture = loader.load ('textures/sun.jpg');

const sunGeometry = new THREE.SphereGeometry (sunSize, 32, 16);
const sunMaterial = new THREE.MeshBasicMaterial ( {map: sunTexture} );
const sun = new THREE.Mesh (sunGeometry, sunMaterial);
//sun.castShadow = true;
//sun.receiveShadow = true;
scene.add (sun);

const light = new THREE.PointLight (0xffffff, 1);
light.position.set (0, 0, 0);
light.castShadow = true;
scene.add (light);

//---- SUN ----//



//---- MERCURY ----//

var mercuryDistance = 11;
var mercurySize = 1;
var mercuryTexture = loader.load ('textures/mercury.jpg');

//const mercury = createObject (mercuryDistance, mercurySize, 'red');
const mercury = createObjectTex (mercuryDistance, mercurySize, mercuryTexture);
mercury.translateX (mercuryDistance);
mercury.castShadow = true;
mercury.receiveShadow = true;
const mercuryOrbitLine = createOrbit (mercuryDistance);
mercuryOrbitLine.rotateX (quarter);

const mercuryOrbit = new THREE.Group();
mercuryOrbit.add (mercuryOrbitLine);
mercuryOrbit.add (mercury);
scene.add (mercuryOrbit);

//---- MERCURY ----//



//---- VENUS ----//

var venusDistance = 14;
var venusSize = 1;
var venusTexture = loader.load ('textures/venus.jpg');

//const venus = createObject (venusDistance, venusSize, 'crimson');
const venus = createObjectTex (venusDistance, venusSize, venusTexture);
venus.translateX (venusDistance);
venus.castShadow = true;
venus.receiveShadow = true;
const venusOrbitLine = createOrbit (venusDistance);
venusOrbitLine.rotateX (quarter);

const venusOrbit = new THREE.Group();
venusOrbit.add (venusOrbitLine);
venusOrbit.add (venus);
scene.add (venusOrbit);

//---- VENUS ----//



//---- EARTH ----//

var earthDistance = 17;
var earthSize = 1;
var earthTexture = loader.load ('textures/earth.jpg');

//const earth = createObject (earthDistance, earthSize, 'blue');
const earth = createObjectTex (earthDistance, earthSize, earthTexture);
earth.translateX (earthDistance);
earth.castShadow = true;
earth.receiveShadow = true;
const earthOrbitLine = createOrbit (earthDistance);
earthOrbitLine.rotateX (quarter);

//---- MOON ----//

var moonDistance = 1.5;
var moonSize = 0.3;
var moonTexture = loader.load ('textures/moon.jpg');

//const moon = createObject (moonDistance, moonSize, 'silver');
const moon = createObjectTex (moonDistance, moonSize, moonTexture);
moon.translateX (moonDistance);
moon.rotateY (2*quarter);
moon.castShadow = true;
moon.receiveShadow = true;
const moonOrbitLine = createOrbit (moonDistance);
moonOrbitLine.rotateX (quarter);

const moonOrbit = new THREE.Group();
moonOrbit.add (moonOrbitLine);
moonOrbit.add (moon);

//---- MOON ----//

earth.add (moonOrbit);

const earthOrbit = new THREE.Group();
earthOrbit.add (earthOrbitLine);
earthOrbit.add (earth);
scene.add (earthOrbit);

//---- EARTH ----//



//---- MARS ----//

var marsDistance = 20;
var marsSize = 1;
var marsTexture = loader.load ('textures/mars.jpg');

//const mars = createObject (marsDistance, marsSize, 'orange');
const mars = createObjectTex (marsDistance, marsSize, marsTexture);
mars.translateX (marsDistance);
mars.castShadow = true;
mars.receiveShadow = true;
const marsOrbitLine = createOrbit (marsDistance);
marsOrbitLine.rotateX (quarter);

const marsOrbit = new THREE.Group();
marsOrbit.add (marsOrbitLine);
marsOrbit.add (mars);
scene.add (marsOrbit);


//---- MARS ----//



//---- JUPITER ----//

var jupiterDistance = 30;
var jupiterSize = 4;
var jupiterTexture = loader.load ('textures/jupiter.jpg');

//const jupiter = createObject (jupiterDistance, jupiterSize, 'brown');
const jupiter = createObjectTex (jupiterDistance, jupiterSize, jupiterTexture);
jupiter.translateX (jupiterDistance);
jupiter.castShadow = true;
jupiter.receiveShadow = true;
const jupiterOrbitLine = createOrbit (jupiterDistance);
jupiterOrbitLine.rotateX (quarter);

//---- IO ----//

var ioDistance = 5;
var ioSize = 0.5;

const io = createObject (ioDistance, ioSize, 'gold');
io.translateX (ioDistance);
io.castShadow = true;
io.receiveShadow = true;
const ioOrbitLine = createOrbit (ioDistance);
ioOrbitLine.rotateX (quarter);

const ioOrbit = new THREE.Group();
ioOrbit.add (ioOrbitLine);
ioOrbit.add (io);

//---- IO ----//

//---- EUROPA ----//

var europaDistance = 6;
var europaSize = 0.5;

const europa = createObject (europaDistance, europaSize, 'lightcoral');
europa.translateX (europaDistance);
europa.castShadow = true;
europa.receiveShadow = true;
const europaOrbitLine = createOrbit (europaDistance);
europaOrbitLine.rotateX (quarter);

const europaOrbit = new THREE.Group();
europaOrbit.add (europaOrbitLine);
europaOrbit.add (europa);

//---- EUROPA ----//

//---- GANYMEDE ----//

var ganymedeDistance = 7;
var ganymedeSize = 0.5;

const ganymede = createObject (ganymedeDistance, ganymedeSize, 'darkred');
ganymede.translateX (ganymedeDistance);
ganymede.castShadow = true;
ganymede.receiveShadow = true;
const ganymedeOrbitLine = createOrbit (ganymedeDistance);
ganymedeOrbitLine.rotateX (quarter);

const ganymedeOrbit = new THREE.Group();
ganymedeOrbit.add (ganymedeOrbitLine);
ganymedeOrbit.add (ganymede);

//---- GANYMEDE ----//

//---- CALLISTO ----//

var callistoDistance = 8;
var callistoSize = 0.5;

const callisto = createObject (callistoDistance, callistoSize, 'mediumpurple');
callisto.translateX (callistoDistance);
callisto.castShadow = true;
callisto.receiveShadow = true;
const callistoOrbitLine = createOrbit (callistoDistance);
callistoOrbitLine.rotateX (quarter);

const callistoOrbit = new THREE.Group();
callistoOrbit.add (callistoOrbitLine);
callistoOrbit.add (callisto);

//---- CALLISTO ----//

jupiter.add(ioOrbit);
jupiter.add(europaOrbit);
jupiter.add(ganymedeOrbit);
jupiter.add(callistoOrbit);

const jupiterOrbit = new THREE.Group();
jupiterOrbit.add (jupiterOrbitLine);
jupiterOrbit.add (jupiter);
scene.add (jupiterOrbit);

//---- JUPITER ----//



//---- SATURN ----//

var saturnDistance = 45;
var saturnSize = 3;
var saturnTexture = loader.load ('textures/saturn.jpg');
var saturnRingsTex = loader.load ('textures/saturnrings.jpg');

//const saturn = createObject (saturnDistance, saturnSize, 'burlywood');
const saturn = createObjectTex (saturnDistance, saturnSize, saturnTexture);
saturn.translateX (saturnDistance);
saturn.castShadow = true;
saturn.receiveShadow = true;
const saturnOrbitLine = createOrbit (saturnDistance);
saturnOrbitLine.rotateX (quarter);

const saturnRingsGeo = new THREE.RingGeometry (4, 6, 32);
const saturnRingsMat = new THREE.MeshBasicMaterial ( {color: 'white', side: THREE.DoubleSide} );
//const saturnRingsMat = new THREE.MeshStandardMaterial ( {map: saturnRingsTex, side: THREE.DoubleSide} );
const saturnRings = new THREE.Mesh (saturnRingsGeo, saturnRingsMat);
saturnRings.translateX (saturnDistance);
saturnRings.rotateX (-quarter);
saturnRings.rotateY (-0.75);
saturnRings.castShadow = true;
saturnRings.receiveShadow = true;

//---- TITAN ----//

//---- TITAN ----//

//---- ENCELADUS ----//

//---- ENCELADUS ----//

//---- IAPETUS ----//

//---- IAPETUS ----//

const saturnOrbit = new THREE.Group();
saturnOrbit.add (saturnOrbitLine);
saturnOrbit.add (saturn);
saturnOrbit.add (saturnRings);
scene.add (saturnOrbit);

//---- SATURN ----//



//---- URANUS ----//

var uranusDistance = 60;
var uranusSize = 2;
var uranusTexture = loader.load ('textures/uranus.jpg');

//const uranus = createObject (uranusDistance, uranusSize, 'cyan');
const uranus = createObjectTex (uranusDistance, uranusSize, uranusTexture);
uranus.translateX (uranusDistance);
uranus.rotateX (quarter);
uranus.castShadow = true;
uranus.receiveShadow = true;
const uranusOrbitLine = createOrbit (uranusDistance);
uranusOrbitLine.rotateX (quarter);

//---- MIRANDA ----//

var mirandaDistance = 3;
var mirandaSize = .5;

const miranda = createObject (mirandaDistance, mirandaSize, 'green');
miranda.translateY (mirandaDistance);
miranda.castShadow = true;
miranda.receiveShadow = true;
const mirandaOrbitLine = createOrbit (mirandaDistance);
mirandaOrbitLine.rotateY (quarter);

const mirandaOrbit = new THREE.Group();
mirandaOrbit.add (miranda);
mirandaOrbit.add (mirandaOrbitLine);

//---- MIRANDA ----//

//---- ARIEL ----//

var arielDistance = 4;
var arielSize = .5;

const ariel = createObject (arielDistance, arielSize, 'violet');
ariel.translateY (arielDistance);
ariel.castShadow = true;
ariel.receiveShadow = true;
const arielOrbitLine = createOrbit (arielDistance);
arielOrbitLine.rotateY (quarter);

const arielOrbit = new THREE.Group();
arielOrbit.add (ariel);
arielOrbit.add (arielOrbitLine);

//---- ARIEL ----//

//---- UMBRIEL ----//

var umbrielDistance = 5;
var umbrielSize = .5;

const umbriel = createObject (umbrielDistance, umbrielSize, 'indigo');
umbriel.translateY (umbrielDistance);
umbriel.castShadow = true;
umbriel.receiveShadow = true;
const umbrielOrbitLine = createOrbit (umbrielDistance);
umbrielOrbitLine.rotateY (quarter);

const umbrielOrbit = new THREE.Group();
umbrielOrbit.add (umbriel);
umbrielOrbit.add (umbrielOrbitLine);

//---- UMBRIEL ----//

//---- TITANIA ----//

var titaniaDistance = 6;
var titaniaSize = .5;

const titania = createObject (titaniaDistance, titaniaSize, 'greenyellow');
titania.translateY (titaniaDistance);
titania.castShadow = true;
titania.receiveShadow = true;
const titaniaOrbitLine = createOrbit (titaniaDistance);
titaniaOrbitLine.rotateY (quarter);

const titaniaOrbit = new THREE.Group();
titaniaOrbit.add (titania);
titaniaOrbit.add (titaniaOrbitLine);

//---- TITANIA ----//

//---- OBERON ----//

var oberonDistance = 7;
var oberonSize = .5;

const oberon = createObject (oberonDistance, oberonSize, 'blueviolet');
oberon.translateY (oberonDistance);
oberon.castShadow = true;
oberon.receiveShadow = true;
const oberonOrbitLine = createOrbit (oberonDistance);
oberonOrbitLine.rotateY (quarter);

const oberonOrbit = new THREE.Group();
oberonOrbit.add (oberon);
oberonOrbit.add (oberonOrbitLine);

//---- OBERON ----//

uranus.add (mirandaOrbit);
uranus.add (arielOrbit);
uranus.add (umbrielOrbit);
uranus.add (titaniaOrbit);
uranus.add (oberonOrbit);

const uranusOrbit = new THREE.Group();
uranusOrbit.add (uranusOrbitLine);
uranusOrbit.add (uranus);
scene.add (uranusOrbit);

//---- URANUS ----//



//---- NEPTUNE ----//

var neptuneDistance = 75;
var neptuneSize = 3;
var neptuneTexture = loader.load ('textures/neptune.jpg');

//const neptune = createObject (neptuneDistance, neptuneSize, 'darkblue');
const neptune = createObjectTex (neptuneDistance, neptuneSize, neptuneTexture);
neptune.translateX (neptuneDistance);
neptune.castShadow = true;
neptune.receiveShadow = true;
const neptuneOrbitLine = createOrbit (neptuneDistance);
neptuneOrbitLine.rotateX (quarter);

//---- TRITON ----//

var tritonDistance = 4;
var tritonSize = 0.5;

const triton = createObject (tritonDistance, tritonSize, 'lightskyblue');
triton.translateX (tritonDistance);
triton.castShadow = true;
triton.receiveShadow = true;
const tritonOrbitLine = createOrbit (tritonDistance);
tritonOrbitLine.rotateX (quarter);

const tritonOrbit = new THREE.Group();
tritonOrbit.add (triton);
tritonOrbit.add (tritonOrbitLine);

//---- TRITON ----//

neptune.add (tritonOrbit);

const neptuneOrbit = new THREE.Group();
neptuneOrbit.add (neptuneOrbitLine);
neptuneOrbit.add (neptune);
scene.add (neptuneOrbit);

//---- NEPTUNE ----//



camera.position.z = 100;
camera.position.y = 50;
//camera.position.x = 60;
camera.rotation.x = -.6;


function createObject (distance, size, color) {
	const geometry = new THREE.SphereGeometry (size, 32, 16);
	const material = new THREE.MeshStandardMaterial ( {color: color} );
	return new THREE.Mesh (geometry, material);
}

function createObjectTex (distance, size, texture) {
	const geometry = new THREE.SphereGeometry (size, 32, 16);
	const material = new THREE.MeshStandardMaterial ( {map: texture} );
	return new THREE.Mesh (geometry, material);
}

function createOrbit (distance) {
	const geometry = new THREE.RingGeometry (distance, distance, 32);
	const material = new THREE.LineBasicMaterial ( {color: 'white'} );
	return new THREE.Line (geometry, material);
}



//controls.autoRotate = true;
controls.update();

var earthCurPos = new THREE.Vector3();

var time = 6;

function animate() {
  requestAnimationFrame (animate);
 
  mercuryOrbit.rotation.y += (1 / 88)/time;
  mercury.rotation.y += (1 / 176)/time;

  venusOrbit.rotation.y += (1 / 225)/time;
  venus.rotation.y -= (1 / 117)/time;

  earthOrbit.rotation.y += (1 / 365)/time;
  earth.rotation.y += 1/time;
  moonOrbit.rotation.y -= 1/time;
  moonOrbit.rotation.y += (1 / 29.5)/time;

  marsOrbit.rotation.y += (1 /687)/time;
  mars.rotation.y += 1/time; 

  jupiterOrbit.rotation.y += (1 / 4329)/time;
  jupiter.rotation.y += (24 / 10)/time;
  ioOrbit.rotation.y -= (24 / 10)/time;
  ioOrbit.rotation.y += (1 / 2)/time;
  europaOrbit.rotation.y -= (24 / 10)/time;
  europaOrbit.rotation.y += (1 / 4)/time;
  ganymedeOrbit.rotation.y -= (24 / 10)/time;
  ganymedeOrbit.rotation.y += (1 / 7)/time;
  callistoOrbit.rotation.y -= (24 / 10)/time;
  callistoOrbit.rotation.y += (1 /16)/time;

  saturnOrbit.rotation.y += (1 / 10759)/time;
  saturn.rotation.y += (24 / 10.5)/time;

  uranusOrbit.rotation.y += (1 / 30660/time);
  uranus.rotation.z += (1 / 30660)/time;
  mirandaOrbit.rotation.x += (1 / 1.5)/time;
  arielOrbit.rotation.x += (1 / 2.5)/time;
  umbrielOrbit.rotation.x += (1 / 4)/time;
  titaniaOrbit.rotation.x += (1 / 9)/time;
  oberonOrbit.rotation.x += (1 / 13.5)/time;

  neptuneOrbit.rotation.y += (1 / 60148)/time;
  neptune.rotation.y += (24 / 16)/time;
  tritonOrbit.rotation.y -= ((24 / 16) + (1 / 6))/time;
 
  //controls.target = earth.getWorldPosition(earthCurPos);
  
  controls.update();

  renderer.render (scene, camera);
}

animate();
