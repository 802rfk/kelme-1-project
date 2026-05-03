import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import BootModel from './BootModel'
import { useState } from 'react'
import type { ReactNode } from 'react'

interface Scene3DProps {
  children?: ReactNode
}

export default function Scene3D({ children }: Scene3DProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const hotspotDesc: Record<string, string> = {
    hd: 'High-Density Microfiber',
    st: 'Multi-Ground Stability',
    lace: 'Lace System',
    sole: 'Stud Pattern'
  }

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: 3,
          toneMappingExposure: 1.2
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <Environment preset="studio" />
        <BootModel onHotspotClick={setActiveHotspot} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          dampingFactor={0.05}
          enableDamping={true}
          minDistance={3}
          maxDistance={10}
          autoRotate={false}
        />
        {children}
      </Canvas>
      {activeHotspot && (
        <div style={{ position: 'fixed', right: 20, bottom: 20, width: 320, background: 'white', borderRadius: 12, padding: 16, boxShadow: '0 8px 24px rgba(0,0,0,.15)' }}>
          <div className="text-sm font-semibold mb-2">Punto: {activeHotspot.toUpperCase()}</div>
          <div className="text-sm text-gray-700">{hotspotDesc[activeHotspot]}</div>
          <button className="mt-3 px-3 py-2 rounded bg-gray-200" onClick={()=>setActiveHotspot(null)}>Cerrar</button>
        </div>
      )}
    </>
  )
}
