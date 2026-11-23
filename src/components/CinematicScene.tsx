import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Core() {
  const group = useRef<THREE.Group | null>(null);
  const ring = useRef<THREE.Mesh | null>(null);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.11;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
    }
    if (ring.current) ring.current.rotation.z -= delta * 0.08;
  });
  return <group ref={group} position={[1.65, 0, 0]}>
    <Float speed={0.6} rotationIntensity={0.12} floatIntensity={0.18}>
      <mesh><icosahedronGeometry args={[1.18, 2]} /><MeshDistortMaterial color="#101e42" roughness={0.19} metalness={0.86} distort={0.16} speed={1.1} /></mesh>
      <mesh scale={1.22}><icosahedronGeometry args={[1.18, 1]} /><meshBasicMaterial color="#4a8cff" wireframe transparent opacity={0.16} /></mesh>
      <mesh ref={ring} rotation={[0.7, 0.25, 0.1]}><torusGeometry args={[1.65, 0.012, 12, 180]} /><meshBasicMaterial color="#54dfff" transparent opacity={0.72} /></mesh>
      <mesh rotation={[1.1, 0.4, 0.7]}><torusGeometry args={[1.9, 0.008, 8, 180]} /><meshBasicMaterial color="#8c6cff" transparent opacity={0.55} /></mesh>
      <mesh position={[0, 0, 0.08]}><sphereGeometry args={[0.46, 48, 48]} /><meshStandardMaterial color="#142f61" emissive="#1766ff" emissiveIntensity={1.1} metalness={0.7} roughness={0.18} /></mesh>
    </Float>
  </group>;
}
function Architecture() {
  return <group position={[1.5, -0.1, -1.8]}>
    {Array.from({ length: 7 }).map((_, i) => <mesh key={i} position={[-3.8 + i * 1.25, -1.55, -0.45 - (i % 2) * 0.45]} rotation={[0, 0, 0]}>
      <boxGeometry args={[0.035, 2.5 + (i % 3) * 0.55, 0.035]} /><meshStandardMaterial color="#284b83" emissive="#163c7c" emissiveIntensity={0.35} metalness={0.8} roughness={0.3} />
    </mesh>)}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]}><planeGeometry args={[18, 12]} /><meshBasicMaterial color="#080d1c" transparent opacity={0.42} /></mesh>
  </group>;
}
function SceneContent() {
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  useFrame((state) => {
    if (camera.current) {
      camera.current.position.x = THREE.MathUtils.lerp(camera.current.position.x, state.pointer.x * 0.28, 0.025);
      camera.current.position.y = THREE.MathUtils.lerp(camera.current.position.y, state.pointer.y * 0.18, 0.025);
      camera.current.lookAt(0.4, 0, 0);
    }
  });
  return <>
    <perspectiveCamera ref={camera} makeDefault position={[0, 0, 8]} fov={42} />
    <ambientLight intensity={0.65} />
    <pointLight position={[2, 3, 4]} intensity={26} color="#397dff" />
    <pointLight position={[-3, -1, 2]} intensity={13} color="#8b5cf6" />
    <spotLight position={[0, 5, 5]} angle={0.45} penumbra={1} intensity={18} color="#b7eaff" />
    <Stars radius={38} depth={22} count={650} factor={2.1} saturation={0.35} fade speed={0.18} />
    <Architecture /><Core />
  </>;
}
export default function CinematicScene() {
  return <div className="scene-canvas" aria-hidden="true"><Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
    <Suspense fallback={null}><SceneContent /></Suspense>
  </Canvas></div>;
}
