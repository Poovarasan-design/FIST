import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SceneProps {
  className?: string;
}

/**
 * Subtle 3D Crystal / Holographic Glass Prism Centerpiece.
 * Translucent geometric form with soft purple / violet reflections,
 * dynamic edge highlights, and slow mathematical rotation.
 * Low GPU footprint, high visual luxury.
 */
export const ComputationalCrystalScene: React.FC<SceneProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const crystalGroup = new THREE.Group();
    scene.add(crystalGroup);

    // 1. Faceted Translucent Outer Crystal Icosahedron
    const crystalGeo = new THREE.IcosahedronGeometry(1.0, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x9333ea,
      emissive: 0x2e1065,
      emissiveIntensity: 0.25,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.7,
      thickness: 1.2,
      transparent: true,
      opacity: 0.75,
      wireframe: false,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    crystalGroup.add(crystalMesh);

    // 2. Fine Wireframe Edges (Holographic Lines)
    const wireGeo = new THREE.WireframeGeometry(crystalGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.6,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    crystalGroup.add(wireMesh);

    // 3. Inner Floating Optical Core
    const innerGeo = new THREE.OctahedronGeometry(0.48, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xf8fafc,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    crystalGroup.add(innerMesh);

    // 4. Subtle Orbital Light Ring
    const curve = new THREE.EllipseCurve(0, 0, 1.5, 1.5, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(64);
    const ringGeo = new THREE.BufferGeometry().setFromPoints(points);
    const ringMat = new THREE.LineBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Line(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    crystalGroup.add(ring);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xa855f7, 2.5, 10);
    pointLight1.position.set(2, 3, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x38bdf8, 1.5, 10);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    // Mouse Tracking for Interactive Parallax Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 460;
      const newH = container.clientHeight || 460;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', onResize);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();

      // Continuous subtle crystal drift
      crystalGroup.rotation.y += 0.35 * delta;
      innerMesh.rotation.x -= 0.5 * delta;
      innerMesh.rotation.y += 0.4 * delta;
      ring.rotation.z += 0.2 * delta;

      // Mouse Parallax smoothing
      targetRotX += (mouseY - targetRotX) * 0.05;
      targetRotY += (mouseX - targetRotY) * 0.05;
      crystalGroup.rotation.x = THREE.MathUtils.lerp(crystalGroup.rotation.x, targetRotX * 0.5, 0.05);

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
      crystalGeo.dispose();
      crystalMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[360px] sm:h-[440px] lg:h-[480px] flex items-center justify-center select-none ${className}`}
    />
  );
};
