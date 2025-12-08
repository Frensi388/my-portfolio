"use client";

import { Float, Html, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

import { Avatar } from "./_components/avatar";

type ProjectStarProps = {
  project: Project;
  index: number;
  isActive: boolean;
  onSelect: (project: Project) => void;
  onHover?: (project: Project | null) => void;
  isPaused: boolean;
};

function ProjectStar({
  project,
  index,
  isActive,
  onSelect,
  onHover,
  isPaused,
}: ProjectStarProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pausedTimeRef = useRef(0);

  // Calculate orbital parameters for a single ring
  const orbitData = useMemo(() => {
    const radius = 4.5; // Fixed radius for all stars
    const speed = 0.15; // Same speed for all stars
    const totalStars = projects.length;
    const initialAngle = (index / totalStars) * Math.PI * 2; // Evenly distribute stars
    const yOffset = 0; // All at same height

    return { radius, speed, initialAngle, yOffset };
  }, [index]);

  // Animate orbit
  useFrame((state) => {
    if (groupRef.current) {
      let angle;

      if (isPaused) {
        // When paused, use the stored time
        angle =
          orbitData.initialAngle + pausedTimeRef.current * orbitData.speed;
      } else {
        // When not paused, update the stored time and calculate angle
        pausedTimeRef.current = state.clock.elapsedTime;
        angle =
          orbitData.initialAngle + state.clock.elapsedTime * orbitData.speed;
      }

      groupRef.current.position.x = Math.cos(angle) * orbitData.radius;
      groupRef.current.position.z = Math.sin(angle) * orbitData.radius;
      groupRef.current.position.y = orbitData.yOffset;
    }
  });

  const scale = isActive ? 0.15 : 0.1;

  return (
    <group ref={groupRef}>
      <Float floatIntensity={0.2} speed={1.5}>
        <group
          onPointerDown={(event) => {
            event.stopPropagation();
            onSelect(project);
          }}
          onPointerOver={(event) => {
            event.stopPropagation();
            onHover?.(project);
          }}
          onPointerOut={() => onHover?.(null)}
        >
          {/* Star core */}
          <mesh scale={scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color={isActive ? "#38bdf8" : "#60a5fa"}
              emissive={isActive ? "#38bdf8" : "#3b82f6"}
              emissiveIntensity={isActive ? 2 : 1.5}
              transparent
              opacity={0.9}
            />
          </mesh>

          {/* Star glow */}
          <mesh scale={scale * 1.5}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color={isActive ? "#38bdf8" : "#60a5fa"}
              emissive={isActive ? "#38bdf8" : "#3b82f6"}
              emissiveIntensity={isActive ? 1.5 : 0.8}
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* Star rays */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <mesh
              key={angle}
              rotation={[0, 0, (angle * Math.PI) / 180]}
              scale={[scale * 0.3, scale * 2, scale * 0.3]}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color={isActive ? "#38bdf8" : "#60a5fa"}
                emissive={isActive ? "#38bdf8" : "#3b82f6"}
                emissiveIntensity={isActive ? 2 : 1.2}
                transparent
                opacity={0.6}
              />
            </mesh>
          ))}

          {/* Small label */}
          <Html
            center
            distanceFactor={8}
            position={[0, 0.3, 0]}
            style={{ pointerEvents: "none" }}
          >
            <div
              className={`whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-medium transition ${
                isActive
                  ? "bg-cyan-500/90 text-white shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                  : "bg-slate-900/70 text-cyan-100/80"
              }`}
            >
              {project.title}
            </div>
          </Html>
        </group>
      </Float>
    </group>
  );
}

function ProjectConstellation({
  activeProject,
  onSelect,
  onHover,
  isPaused,
}: {
  activeProject: Project | undefined | null;
  onSelect: (project: Project) => void;
  onHover: (project: Project | null) => void;
  isPaused: boolean;
}) {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectStar
          key={project.id}
          project={project}
          index={index}
          isActive={activeProject ? project.id === activeProject.id : false}
          onSelect={onSelect}
          onHover={onHover}
          isPaused={isPaused}
        />
      ))}
    </>
  );
}

function CanvasFallback() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-3xl border border-white/20 bg-slate-900/70 text-white/70">
      <span className="text-sm font-medium">Preparing immersive view…</span>
      <span className="text-xs uppercase tracking-[0.3em] text-white/40">
        Loading
      </span>
    </div>
  );
}

function SceneContent({
  activeProject,
  setActiveProject,
  setHoveredProject,
}: {
  activeProject: Project | undefined;
  setActiveProject: (project: Project) => void;
  setHoveredProject: (project: Project | null) => void;
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <color attach="background" args={["#020617"]} />

      {/* Enhanced lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.7}
        color="#60a5fa"
      />
      <pointLight position={[0, 2, 3]} intensity={1.5} color="#38bdf8" />

      {/* Spotlight focused on avatar */}
      <spotLight
        position={[0, 5, 5]}
        angle={0.5}
        penumbra={0.5}
        intensity={2}
        color="#ffffff"
      />

      {/* Rim lights to define avatar edges against dark background */}
      <pointLight position={[-3, 1, -3]} intensity={1.5} color="#38bdf8" />
      <pointLight position={[3, 1, -3]} intensity={1.5} color="#60a5fa" />
      <directionalLight position={[0, 2, -5]} intensity={1.2} color="#818cf8" />

      {/* Background stars */}
      <Stars radius={50} depth={50} count={3000} factor={4} fade speed={0.5} />

      <Suspense fallback={null}>
        <Avatar
          scale={1.2}
          position={[0, -1.5, 0]}
          rotation={[Math.PI / 2, Math.PI, Math.PI]}
        />
      </Suspense>

      <group
        onPointerEnter={() => setIsPaused(true)}
        onPointerLeave={() => setIsPaused(false)}
      >
        <ProjectConstellation
          activeProject={activeProject}
          onSelect={setActiveProject}
          onHover={setHoveredProject}
          isPaused={isPaused}
        />
      </group>

      <OrbitControls
        makeDefault
        enableRotate
        enableZoom
        enablePan={false}
        minDistance={6}
        maxDistance={15}
      />
    </>
  );
}

export function ThreeDClient() {
  const [activeProject, setActiveProject] = useState<Project>();
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Full-screen Canvas */}
      <div className="absolute inset-0">
        <Suspense fallback={<CanvasFallback />}>
          <Canvas
            camera={{ position: [0, 0.5, 8], fov: 45 }}
            dpr={[1, 1]}
            gl={{
              antialias: false,
              powerPreference: "default",
            }}
          >
            <SceneContent
              activeProject={activeProject}
              setActiveProject={setActiveProject}
              setHoveredProject={setHoveredProject}
            />
          </Canvas>
        </Suspense>
      </div>

      {/* Bottom project info panel */}
      {activeProject && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-6 sm:p-8">
          <div className="pointer-events-auto max-w-xl flex-1 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
              Currently viewing
            </span>
            <div className="mt-3">
              <p className="text-xs text-white/60">
                {activeProject.company} • {activeProject.duration}
              </p>
              <p className="mt-1 text-xl font-semibold text-white">
                {activeProject.title}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {activeProject.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeProject.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {tech}
                </span>
              ))}
              {activeProject.technologies.length > 5 ? (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  +{activeProject.technologies.length - 5} more
                </span>
              ) : null}
            </div>
            {activeProject.liveUrl ? (
              <a
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-500/20"
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <span aria-hidden>↗</span>
              </a>
            ) : null}
          </div>

          {/* Bottom right - Hover info */}
          <div className="pointer-events-auto hidden w-80 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl lg:block">
            {hoveredProject ? (
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">
                  Hovering
                </p>
                <p className="text-base font-medium text-white">
                  {hoveredProject.title}
                </p>
                <p className="text-xs text-white/60">{hoveredProject.role}</p>
                <p className="line-clamp-3 text-sm text-white/70">
                  {hoveredProject.description}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Controls
                </p>
                <p className="text-sm text-white/70">
                  • Click stars to view projects
                  <br />
                  • Drag to rotate the scene
                  <br />• Scroll to zoom in/out
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

// useGLTF.preload("/models/avatar.glb");
// useFBX.preload("/animations/Typing.fbx");
