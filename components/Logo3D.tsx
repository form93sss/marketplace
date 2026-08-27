"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// ชิ้นส่วนโลโก้ 3D
function LogoMesh() {
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // หมุนวงแหวนและโลโก้ช้าๆ แบบอัตโนมัติ
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.4;
    if (ringRef.current) ringRef.current.rotation.z -= delta * 0.6;
  });

  return (
    <group ref={meshRef}>
      {/* ตัวอักษรโลโก้ 3D */}
      <Center>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={1.5}
          height={0.4}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.03}
          bevelSegments={5}
        >
          XYRA
          <meshStandardMaterial
            color="#f97316" // สีส้ม นีออน
            metalness={0.8}
            roughness={0.2}
            emissive="#ea580c"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>

      {/* วงแหวน 3D เรืองแสงล้อมรอบ */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.6, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#fbbf24" // สีทอง-ส้ม
          emissive="#f59e0b"
          emissiveIntensity={1.5}
          wireframe
        />
      </mesh>
    </group>
  );
}

// Canvas หลักสำหรับแสดงผล
export default function Logo3D() {
  return (
    <div className="w-full h-80 rounded-2xl bg-zinc-950 border border-orange-500/30 overflow-hidden relative shadow-[0_0_30px_rgba(249,115,22,0.15)]">
      <div className="absolute top-3 left-4 z-10">
        <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full text-[10px] font-bold text-orange-400">
          3D LOGO PREVIEW (หมุนดูได้)
        </span>
      </div>

      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        {/* แสงสว่างในฉาก */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#f97316" />

        {/* อนิเมชันลอยเบาๆ */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <LogoMesh />
        </Float>

        {/* ควบคุมการหมุนด้วยเมาส์ / นิ้วสัมผัส */}
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}