import * as THREE from 'three'

export default function ex03Init() {
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

  // 빛
  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(0, 2, 12)
  scene.add(pointLight)

  // 텍스처 추가
  const textureLoader = new THREE.TextureLoader()
  const textureBaseColor = textureLoader.load(
    '../static/images/Stylized_Stone_Floor_005_basecolor.jpg'
  )
  const textureNormalMap = textureLoader.load(
    '../static/images/Stylized_Stone_Floor_005_normal.jpg'
  )
  const textureHeightMap = textureLoader.load(
    '../static/images/Stylized_Stone_Floor_005_height.png'
  )
  const textureRoughnessMap = textureLoader.load(
    '../static/images/Stylized_Stone_Floor_005_roughness.jpg'
  )

  // Mesh
  const geometry = new THREE.SphereGeometry(0.4, 32, 16)
  const material01 = new THREE.MeshStandardMaterial({
    map: textureBaseColor,
  })

  const material02 = new THREE.MeshStandardMaterial({
    map: textureBaseColor,
    normalMap: textureNormalMap,
  })

  const material03 = new THREE.MeshStandardMaterial({
    map: textureBaseColor,
    normalMap: textureNormalMap,
    displacementMap: textureHeightMap,
    displacementScale: .04
  })

  const material04 = new THREE.MeshStandardMaterial({
    map: textureBaseColor,
    normalMap: textureNormalMap,
    displacementMap: textureHeightMap,
    displacementScale: .04,
    roughnessMap: textureRoughnessMap,
    roughness: .5
  })

  // 도형 추가
  const obj01 = new THREE.Mesh(geometry, material01)
  obj01.position.x = -2
  scene.add(obj01)

  const obj02 = new THREE.Mesh(geometry, material02)
  scene.add(obj02)
  obj02.position.x = -1

  const obj03 = new THREE.Mesh(geometry, material03)
  scene.add(obj03)
  obj03.position.x = 0

  const obj04 = new THREE.Mesh(geometry, material04)
  scene.add(obj04)
  obj04.position.x = 1

  function render(time) {
    time *= 0.0005

    obj01.rotation.y = time
    obj01.rotation.x = time

    obj02.rotation.y = time
    obj02.rotation.x = time

    obj03.rotation.y = time
    obj03.rotation.x = time

    obj04.rotation.y = time
    obj04.rotation.x = time

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
