import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreePreview() {
  const containerRef = useRef()

  useEffect(() => {
    const container = containerRef.current

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 40

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(10, 10, 10)
    scene.add(light)

    const group = new THREE.Group()
    scene.add(group)

    const loader = new THREE.TextureLoader()
    loader.load('/textures/steve.png', (texture) => {
      texture.magFilter = THREE.NearestFilter
      texture.minFilter = THREE.NearestFilter

      const createBox = (w, h, d, x, y, z, uvOffset) => {
        const geometry = new THREE.BoxGeometry(w, h, d)

        // Zastosuj UV mapping (prosto – wszystkie ściany taki sam fragment)
        const faceUV = []
        for (let i = 0; i < 6; i++) {
          faceUV.push(new THREE.Vector2(uvOffset.u, uvOffset.v))
        }
        geometry.faceVertexUvs = [[]] // czyszczę, ale dokładne UV możesz uzupełnić ręcznie

        const material = new THREE.MeshBasicMaterial({ map: texture })
        const box = new THREE.Mesh(geometry, material)
        box.position.set(x, y, z)
        return box
      }

      // Głowa 8x8x8
      const head = createBox(8, 8, 8, 0, 24, 0, { u: 0, v: 0 })

      // Ciało 8x12x4
      const body = createBox(8, 12, 4, 0, 12, 0, { u: 16, v: 16 })

      // Ręka lewa 4x12x4
      const armL = createBox(4, 12, 4, -6, 12, 0, { u: 32, v: 48 })

      // Ręka prawa 4x12x4
      const armR = createBox(4, 12, 4, 6, 12, 0, { u: 40, v: 16 })

      // Noga lewa 4x12x4
      const legL = createBox(4, 12, 4, -2, 0, 0, { u: 0, v: 16 })

      // Noga prawa 4x12x4
      const legR = createBox(4, 12, 4, 2, 0, 0, { u: 0, v: 16 })

      group.add(head, body, armL, armR, legL, legR)
    })

    const animate = () => {
      requestAnimationFrame(animate)
      group.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      renderer.dispose()
      container.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
      }}
    />
  )
}
