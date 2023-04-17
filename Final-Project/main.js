//main.js

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PersepctiveCamera (90, window.innerWidth / window.innerHeight, 1, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);

const geometry = new THREE.ShereGeometry (15, 32, 16);
const material = new THREE.MeshBasicMaterial ( {color: 0xffff00} );
const sphere = new THREE.Mesh (geometry, material);
scene.add (sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame (animate);
  
  sphere.rotation.x += 0.01;
  
  renderer.render (scene, camera);
}

animate();
