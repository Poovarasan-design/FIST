import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  className?: string;
}

/**
 * Sophisticated 3D Digital Campus / Computational Network Centerpiece.
 * Rendered using Three.js with minimal geometry, wireframe orbital rings,
 * floating nodal points, and slow mathematical rotation.
 * 60 FPS, ultra-low GPU consumption, graceful mobile scale.
 */
export const ComputationalCampusScene: React.FC<Scene3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group holding the entire architectural structure
    const campusGroup = new THREE.Group();
    scene.add(campusGroup);

    // 1. Central Icosahedron Core (Abstract Computing Node)
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1, // Subtle violet/indigo
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    campusGroup.add(coreMesh);

    // 2. Inner Solid Geometric Core
    const innerGeo = new THREE.OctahedronGeometry(0.45, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    campusGroup.add(innerMesh);

    // 3. Orbital Elliptical Rings (Representing system workflows)
    const ringMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.25,
    });

    const createRing = (radiusX: number, radiusY: number, rotX: number, rotY: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(64);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const ring = new THREE.Line(geometry, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(1.4, 1.4, Math.PI / 3, 0.2);
    const ring2 = createRing(1.6, 1.6, -Math.PI / 4, 0.5);
    campusGroup.add(ring1);
    campusGroup.add(ring2);

    // 4. Subtle Outer Constellation Nodes (Connected Students/Systems)
    const particleCount = 48;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.1 + Math.random() * 0.7;

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
    });
    const pointsMesh = new THREE.Points(particleGeo, particleMat);
    campusGroup.add(pointsMesh);

    // Mouse Tracking for subtle parallax tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mouseX = x * 0.8;
      mouseY = y * 0.8;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 500;
      const newH = container.clientHeight || 500;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Continuous subtle ambient rotation
      campusGroup.rotation.y += 0.25 * delta;
      innerMesh.rotation.x -= 0.4 * delta;
      innerMesh.rotation.y += 0.3 * delta;

      ring1.rotation.z += 0.15 * delta;
      ring2.rotation.z -= 0.18 * delta;

      // Mouse Parallax Damping
      targetRotX += (mouseY - targetRotX) * 0.05;
      targetRotY += (mouseX - targetRotY) * 0.05;
      campusGroup.rotation.x = THREE.MathUtils.lerp(campusGroup.rotation.x, targetRotX * 0.4, 0.05);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none ${className}`}
    />
  );
};
