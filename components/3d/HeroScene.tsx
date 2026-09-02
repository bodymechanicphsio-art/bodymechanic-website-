"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

const FIGURE_URL = "https://threejs.org/examples/models/gltf/Soldier.glb";

useGLTF.preload(FIGURE_URL);

/* ─────────────────────────────────────────
   ANIMATED HUMAN FIGURE - realistic rig
───────────────────────────────────────── */
function AnimatedFigure() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(FIGURE_URL);
  const { actions, names } = useAnimations(animations, groupRef);

  // Tint the soldier into a clean clinical pink-purple silhouette.
  const cloned = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#1a0612"),
          emissive: new THREE.Color("#E91E8C"),
          emissiveIntensity: 0.35,
          roughness: 0.45,
          metalness: 0.25,
        });
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  useEffect(() => {
    // Soldier.glb ships with: ['Idle', 'Walk', 'Run']. Play Idle for a calm clinical feel.
    const action = actions["Idle"] ?? actions[names[0]];
    if (!action) return;
    action.reset().fadeIn(0.6).play();
    return () => { action.fadeOut(0.4); };
  }, [actions, names]);

  // Slow ambient rotation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.15) * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.6, 0]} scale={1.55} dispose={null}>
      <primitive object={cloned} />
    </group>
  );
}

/* ─────────────────────────────────────────
   AMBIENT EFFECTS
───────────────────────────────────────── */
function GlowRings() {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (r1.current) r1.current.rotation.z = t * 0.15;
    if (r2.current) { r2.current.rotation.x = t * 0.18; r2.current.rotation.y = t * 0.08; }
  });
  return (
    <>
      <mesh ref={r1}>
        <torusGeometry args={[2.6, 0.012, 8, 120]} />
        <meshBasicMaterial color="#E91E8C" transparent opacity={0.5} />
      </mesh>
      <mesh ref={r2} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[3.0, 0.009, 8, 120]} />
        <meshBasicMaterial color="#9D4EDD" transparent opacity={0.36} />
      </mesh>
    </>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Group>(null);
  const pts = useMemo(() => {
    const arr: { pos: [number, number, number]; color: string; size: number }[] = [];
    const rand = (s: number) => { const x = Math.sin(s * 9301 + 49297) * 233280; return x - Math.floor(x); };
    for (let i = 0; i < 200; i++) {
      const phi = Math.acos(-1 + (2 * i) / 200);
      const theta = Math.sqrt(200 * Math.PI) * phi;
      const r = 3.5 + rand(i + 1) * 1.6;
      arr.push({
        pos: [r * Math.cos(theta) * Math.sin(phi), r * Math.sin(theta) * Math.sin(phi), r * Math.cos(phi)],
        color: i % 4 === 0 ? "#E91E8C" : i % 4 === 1 ? "#9D4EDD" : i % 4 === 2 ? "#FF4DB8" : "#ffffff",
        size: 0.012 + rand(i + 100) * 0.022,
      });
    }
    return arr;
  }, []);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.04;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.025) * 0.06;
    }
  });
  return (
    <group ref={ref}>
      {pts.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[p.size, 4, 4]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

/* ─────────────────────────────────────────
   PULSE AURA - radial pink halo behind the figure
───────────────────────────────────────── */
function FigureAura() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const s = 1 + Math.sin(t * 1.4) * 0.06;
    ref.current.scale.set(s, s, s);
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.18 + Math.abs(Math.sin(t * 1.4)) * 0.12;
  });
  return (
    <mesh ref={ref} position={[0, 0.1, -0.6]}>
      <circleGeometry args={[1.6, 64]} />
      <meshBasicMaterial color="#E91E8C" transparent opacity={0.22} side={THREE.DoubleSide} />
    </mesh>
  );
}

/* ─────────────────────────────────────────
   MAIN
───────────────────────────────────────── */
export default function HeroScene() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%", background: "transparent", display: "block" }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 0.4, 5.6], fov: 48, near: 0.1, far: 100 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.45} color="#fff5f0" />
        <spotLight position={[2, 5, 4]} intensity={6} color="#ffffff" angle={0.4} penumbra={0.6} distance={14} decay={2} castShadow />
        <pointLight position={[3, 2, 3]} intensity={5} color="#E91E8C" distance={11} decay={2} />
        <pointLight position={[-3, -1, 3]} intensity={4} color="#9D4EDD" distance={11} decay={2} />
        <pointLight position={[0, 4, -2]} intensity={2.5} color="#FF4DB8" distance={9} decay={2} />

        <Stars radius={90} depth={50} count={2000} factor={3} saturation={0} fade speed={0.3} />
        <ParticleField />
        <GlowRings />
        <FigureAura />

        <Float speed={0.45} rotationIntensity={0.05} floatIntensity={0.18}>
          <AnimatedFigure />
        </Float>
      </Suspense>
    </Canvas>
  );
}
