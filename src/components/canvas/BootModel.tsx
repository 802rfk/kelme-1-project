import * as THREE from 'three'
import { useEffect, useState, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function BootModel({ onHotspotClick }: { onHotspotClick?: (id: string) => void }) {
  const groupRef = useRef<THREE.Group | null>(null)

  const Placeholder = () => (
    <group>
      <mesh>
        <boxGeometry args={[1.2, 0.15, 3]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[-0.8, 0, -1.2]}>
        <boxGeometry args={[0.8, 0.8, 0.6]} />
        <meshStandardMaterial color="#F5F5F5" />
      </mesh>
      <mesh position={[0, 0.2, 0.3]}>
        <boxGeometry args={[1, 0.4, 2]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      {[
        { id: 'hd', pos: new THREE.Vector3(0.3, -0.2, -1) },
        { id: 'st', pos: new THREE.Vector3(-0.2, -0.25, -0.8) },
        { id: 'lace', pos: new THREE.Vector3(0.4, 0.0, 0.2) },
        { id: 'sole', pos: new THREE.Vector3(-0.4, -0.25, 0.2) }
      ].map((h) => (
        <mesh key={h.id} position={h.pos} onPointerDown={() => onHotspotClick?.(h.id)}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.9} />
        </mesh>
      ))}
    </group>
  )

  return (
    <group ref={groupRef}>
      <Placeholder />
    </group>
  )
}