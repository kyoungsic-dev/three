import * as THREE from 'three'

export default function ex01Init() {
  //# 장면
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x004fff)

  //# 카메라
  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    10000
  )
  camera.position.z = 4

  // Canvas
  const canvas = document.querySelector('#ex')

  //# 렌더러
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(innerWidth, innerHeight)
  // document.body.appendChild(renderer.domElement)

  // Mesh
  const geometry01 = new THREE.ConeGeometry(0.4, 0.6, 0.4)
  const material01 = new THREE.MeshStandardMaterial({
    color: 0x999999,
  })

  // obj01
  const obj01 = new THREE.Mesh(geometry01, material01)
  scene.add(obj01)

  obj01.position.x = -1.2

  // obj02
  const geometry02 = new THREE.SphereGeometry(0.5, 0.5, 0.5)
  const material02 = new THREE.MeshStandardMaterial({
    color: 0x999999,
  })

  const obj02 = new THREE.Mesh(geometry02, material02)
  scene.add(obj02)

  // obj03
  const geometry03 = new THREE.IcosahedronGeometry(0.5, 0)
  const material03 = new THREE.MeshStandardMaterial({
    color: 0x999999,
  })

  const obj03 = new THREE.Mesh(geometry03, material03)
  scene.add(obj03)

  obj03.position.x = 1.2

  function render(time) {
    time *= 0.0005

    // obj01.rotation.x = time
    obj01.rotation.y = time

    // obj02.rotation.x = time
    obj02.rotation.y = time

    // obj03.rotation.x = time
    obj03.rotation.y = time

    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)

  //# 반응형
  function onWindowResize() {
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(innerWidth, innerHeight)
  }

  addEventListener('resize', onWindowResize)
}
