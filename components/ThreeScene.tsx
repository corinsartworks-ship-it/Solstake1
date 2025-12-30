import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    // Move camera slightly further back to accommodate the larger sphere without clipping
    camera.position.z = 8.0;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particle Sphere Configuration - Significantly increased radius to make the orb bigger
    const particleCount = 18000; // Increased particle count slightly for density with larger size
    const sphereRadius = 3.8; 
    
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const originalPositions = new Float32Array(particleCount * 3);

    const colorMagenta = new THREE.Color(0xff00ff);
    const colorBlue = new THREE.Color(0x0066ff);

    for (let i = 0; i < particleCount; i++) {
      // Use spherical coordinates for even distribution
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      // Add a bit of thickness to the sphere surface for volume
      const r = sphereRadius + (Math.random() - 0.5) * 0.2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const i3 = i * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      
      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      // Color split: Pink/Magenta on left (X < 0), Blue on right (X > 0)
      const mixFactor = (x / sphereRadius + 1) / 2; // 0 to 1
      const mixedColor = new THREE.Color().copy(colorMagenta).lerp(colorBlue, mixFactor);
      
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 1.5 + 0.8;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom Shader Material for the glowing particle look
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float size;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          
          vec3 pos = position;
          
          // Smoother, slower particle movement
          float jitter = sin(pos.y * 10.0 + uTime * 1.2) * 0.03 + cos(pos.x * 10.0 + uTime * 1.2) * 0.03;
          float swirl = sin(pos.z * 2.0 + uTime * 0.4) * 0.05 + cos(pos.y * 3.0 + uTime * 0.2) * 0.05;
          pos += normalize(pos) * (jitter + swirl);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * uPixelRatio * (25.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float r = 0.0;
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          r = dot(cxy, cxy);
          if (r > 1.0) discard;
          
          float strength = 1.0 - r;
          strength = pow(strength, 3.5);
          
          gl_FragColor = vec4(vColor, strength * 0.9);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    const points = new THREE.Points(geometry, particleMaterial);
    scene.add(points);

    // Subtle background drift particles
    const bgCount = 100;
    const bgGeometry = new THREE.BufferGeometry();
    const bgPos = new Float32Array(bgCount * 3);
    for (let i = 0; i < bgCount; i++) {
      bgPos[i * 3] = (Math.random() - 0.5) * 30;
      bgPos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      bgPos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 8;
    }
    bgGeometry.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
    const bgMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x9945FF,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending
    });
    const bgPoints = new THREE.Points(bgGeometry, bgMaterial);
    scene.add(bgPoints);

    // Animation Loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.0025; // Slower time progression
      
      particleMaterial.uniforms.uTime.value = time;
      
      // Slower, more gentle continuous rotation
      points.rotation.y += 0.0005;
      points.rotation.x = Math.sin(time * 0.08) * 0.05;

      // Slower, more gentle multi-layered pulsation
      const pulse1 = Math.sin(time * 0.6) * 0.015;
      const pulse2 = Math.cos(time * 0.4) * 0.01;
      const pulse = 1 + pulse1 + pulse2;
      points.scale.set(pulse, pulse, pulse);

      // Slower camera drift
      camera.position.x = Math.sin(time * 0.15) * 0.4;
      camera.position.y = Math.cos(time * 0.15) * 0.2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      particleMaterial.dispose();
      bgGeometry.dispose();
      bgMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};