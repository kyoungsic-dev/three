import * as THREE from 'three'

export default function ex02Init() {
  //# 장면
  const scene = new THREE.Scene()

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

  // Mesh
  const geometry = new THREE.TorusGeometry(0.3, 0.15, 16, 40)
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xff7f00,
    // metalness: 0.6,
    // transparent: true,
    // opacity: 0.5,
    // roughness: 0.4,
    // shininess: 120,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
  })

  // 빛
  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(0, 2, 12)
  scene.add(pointLight)

  // 도형 추가
  const obj01 = new THREE.Mesh(geometry, material)
  obj01.position.x = -2
  scene.add(obj01)

  const obj02 = new THREE.Mesh(geometry, material)
  scene.add(obj02)
  obj02.position.x = -1

  const obj03 = new THREE.Mesh(geometry, material)
  scene.add(obj03)
  obj03.position.x = 0

  const obj04 = new THREE.Mesh(geometry, material)
  scene.add(obj04)
  obj04.position.x = 1

  const obj05 = new THREE.Mesh(geometry, material)
  scene.add(obj05)
  obj05.position.x = 2

  function render(time) {
    time *= 0.0005

    obj01.rotation.y = time

    obj02.rotation.y = time

    obj03.rotation.y = time

    obj04.rotation.y = time

    obj05.rotation.y = time

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
