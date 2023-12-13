import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'

const objects = []; //list of scene objects
let raycaster; //raygun

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

let camera, scene, renderer, controls;

init();
animate();
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.y = 10;

    controls = new PointerLockControls(camera, document.body);

    const blocker = document.getElementById('blocker');
    const instructions = document.getElementById('instructions');

    instructions.addEventListener('click', function () {
        controls.lock();
    });
    controls.addEventListener('lock', function () {
        instructions.style.display = 'none';
        blocker.style.display = 'none';
    });
    controls.addEventListener('unlock', function () {
        blocker.style.display = 'block';
        instructions.style.display = '';
    });

    scene.add(controls.getObject());

    const onKeyDown = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = true;
                break;
            case 'KeyS':
                moveBackward = true;
                break;
            case 'KeyA':
                moveLeft = true;
                break;
            case 'KeyD':
                moveRight = true;
                break;
            case 'Space':
                if (canJump === true) velocity.y += 350;
                canJump = false;
                break;
        }
    }

    const onKeyUp = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = false;
                break;
            case 'KeyS':
                moveBackward = false;
                break;
            case 'KeyA':
                moveLeft = false;
                break;
            case 'KeyD':
                moveRight = false;
                break;
        }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);

    const light1 = new THREE.AmbientLight(0xffffff);
    light1.position.set(30, 10, 0)
    scene.add(light1)

    const geometry = new THREE.PlaneGeometry(1000, 1000, 64, 64);
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    objects.push(cube)
    cube.rotateX(-1.57)

    const geometry1 = new THREE.BoxGeometry(5, 5, 5);
    const material1 = new THREE.MeshLambertMaterial({ color: 0x00ffff });
    const cube1 = new THREE.Mesh(geometry1, material1);
    cube1.position.y = 65
    cube1.position.x = -10
    scene.add(cube1);
    objects.push(cube1)
    cube1.rotateX(-1.57)

    const geometry2 = new THREE.SphereGeometry(5, 5, 5);
    const material2 = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.y = 80
    cube2.position.x = 10
    scene.add(cube2);
    objects.push(cube2)
    cube2.rotateX(-1.57)

    const geometry3 = new THREE.TorusGeometry(9, 5, 64, 64);
    const material3 = new THREE.MeshLambertMaterial({ color: 0x0000ff });
    const cube3 = new THREE.Mesh(geometry3, material3);
    cube3.position.y = 45
    cube3.position.x = -55
    scene.add(cube3);
    objects.push(cube3)
    cube3.rotateX(-1.57)

    const geometry4 = new THREE.TorusGeometry(7, 5, 64, 64);
    const material4 = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    const cube4 = new THREE.Mesh(geometry4, material4);
    cube4.position.y = 100
    cube4.position.x = -50
    scene.add(cube4);
    objects.push(cube4)
    cube4.rotateX(-1.57)

    const geometry5 = new THREE.TorusGeometry(10, 5, 64, 64);
    const material5 = new THREE.MeshLambertMaterial({ color: 0x008000 });
    const cube5 = new THREE.Mesh(geometry5, material5);
    cube5.position.y = 100
    cube5.position.x = 53
    scene.add(cube5);
    objects.push(cube5)
    cube5.rotateX(-1.57)

    const geometry6 = new THREE.BoxGeometry(10, 10, 5);
    const material6 = new THREE.MeshLambertMaterial({ color: 0xffd700 });
    const cube6 = new THREE.Mesh(geometry6, material6);
    cube6.position.y = 150
    cube6.position.x = -50
    scene.add(cube6);
    objects.push(cube6)
    cube6.rotateX(-1.57)

    const geometry7 = new THREE.TorusGeometry(100, 15, 64, 64);
    const material7 = new THREE.MeshLambertMaterial({ color: 0x008000 });
    const cube7 = new THREE.Mesh(geometry7, material7);
    cube7.position.y = 100
    cube7.position.x = 53
    scene.add(cube7);
    objects.push(cube7)
    cube7.rotateX(-1.57)

    const geometry9 = new THREE.BoxGeometry(5, 5, 5);
    const material9 = new THREE.MeshLambertMaterial({ color: 0x00ffff });
    const cube9 = new THREE.Mesh(geometry9, material9);
    cube9.position.y = 35
    cube9.position.x = 50
    scene.add(cube9);
    objects.push(cube9)
    cube9.rotateX(-1.57)

    const geometry10 = new THREE.SphereGeometry(5, 5, 5);
    const material10 = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    const cube10 = new THREE.Mesh(geometry10, material10);
    cube10.position.y = 80
    cube10.position.x = 50
    scene.add(cube10);
    objects.push(cube10)
    cube10.rotateX(-1.57)

    const geometry11 = new THREE.TorusGeometry(9, 5, 64, 64);
    const material11 = new THREE.MeshLambertMaterial({ color: 0x0000ff });
    const cube11 = new THREE.Mesh(geometry11, material11);
    cube11.position.y = 45
    cube11.position.x = -55
    scene.add(cube11);
    cube11.rotateX(-1.57)

    const geometry14 = new THREE.TorusGeometry(7, 5, 64, 64);
    const material14 = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    const cube14 = new THREE.Mesh(geometry14, material14);
    cube14.position.y = 100
    cube14.position.x = -150
    scene.add(cube14);
    objects.push(cube14)
    cube4.rotateX(-1.57)

    const geometry15 = new THREE.TorusGeometry(10, 5, 64, 64);
    const material15 = new THREE.MeshLambertMaterial({ color: 0x008000 });
    const cube15 = new THREE.Mesh(geometry15, material15);
    cube15.position.y = 100
    cube15.position.x = 103
    scene.add(cube15);
    objects.push(cube15)
    cube15.rotateX(-1.57)

    const geometry16 = new THREE.BoxGeometry(10, 10, 5);
    const material16 = new THREE.MeshLambertMaterial({ color: 0xffd700 });
    const cube16 = new THREE.Mesh(geometry16, material16);
    cube16.position.y = 150
    cube16.position.x = 90
    scene.add(cube16);
    objects.push(cube16)
    cube16.rotateX(-1.57)

    const geometry17 = new THREE.TorusGeometry(100, 15, 64, 64);
    const material17 = new THREE.MeshLambertMaterial({ color: 0x008000 });
    const cube17 = new THREE.Mesh(geometry17, material17);
    cube17.position.y = 100
    cube17.position.x = 233
    scene.add(cube17);
    objects.push(cube17)
    cube17.rotateX(-1.57)

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    const time = performance.now();

    if (controls.isLocked === true) {
        raycaster.ray.origin.copy(controls.getObject().position);
        raycaster.ray.origin.y -= 10;

        const intersections = raycaster.intersectObjects(objects, false);
        const onObject = intersections.length > 0;
        const delta = (time - prevTime) / 1000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        velocity.y -= 9.8 * 100.0 * delta;

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize();

        if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

        if (onObject === true) {
            velocity.y = Math.max(0, velocity.y);
            canJump = true;
        }

        controls.moveRight(-velocity.x * delta);
        controls.moveForward(-velocity.z * delta);
        controls.getObject().position.y += (velocity.y * delta);
        if (controls.getObject().position.y < 10) {
            velocity.y = 0;
            controls.getObject().position.y = 10;
            canJump = true
        }
    }
    prevTime = time;
    renderer.render(scene, camera);
}