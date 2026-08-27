"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function LogoMesh() {
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.4;
    if (ringRef.current) ringRef.current.rotation.z -= delta * 0.6;
  });

  return (
    <group ref={meshRef}>
      {/* ข้อความโลโก้ KhongManTongMi 3D */}
      <Center>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={0.65}
          height={0.25}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelSegments={5}
        >
          KhongManTongMi
          <meshStandardMaterial
            color="#f97316"
            metalness={0.8}
            roughness={0.2}
            emissive="#ea580c"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>

      {/* วงแหวน 3D ล้อมรอบ */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3.2, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          emissiveIntensity={1.5}
          wireframe
        />
      </mesh>
    </group>
  );
}

export default function Logo3D() {
  return (
    <div className="w-52 h-14 bg-zinc-900/60 border border-orange-500/40 rounded-xl overflow-hidden relative shadow-[0_0_15px_rgba(249,115,22,0.2)]">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#f97316" />

        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
          <LogoMesh />
        </Float>

        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}