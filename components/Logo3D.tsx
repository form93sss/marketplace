"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// ชิ้นส่วนโลโก้ 3D (ไอคอน CM + ข้อความ)
function BrandMesh() {
  const cubeRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group>
      {/* 1. ไอคอนกล่องทรงมน 3D สีส้ม (ตัวอักษร CM) */}
      <group ref={cubeRef} position={[-3.8, 0, 0]}>
        <mesh>
          <boxGeometry args={[1.3, 1.3, 0.4]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.6}
            roughness={0.2}
            emissive="#ea580c"
            emissiveIntensity={0.3}
          />
        </mesh>
        <Center position={[0, 0, 0.22]}>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
            size={0.55}
            height={0.1}
          >
            CM
            <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
          </Text3D>
        </Center>
      </group>

      {/* 2. ข้อความ 3D "Campus Marketplace" */}
      <Center position={[0.8, 0, 0]}>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={0.65}
          height={0.15}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.01}
          bevelSegments={3}
        >
          Campus Marketplace
          <meshStandardMaterial
            color="#f97316"
            metalness={0.7}
            roughness={0.2}
            emissive="#ea580c"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>
    </group>
  );
}

export default function Logo3D() {
  return (
    <div className="w-[280px] h-11 bg-transparent overflow-hidden relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#f97316" />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <BrandMesh />
        </Float>

        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}