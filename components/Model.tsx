import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Ayaka from './Ayaka';

const Model = () => (
  <Canvas orthographic camera={{ zoom: 200, position: [0, 0, 100] }}>
    <ambientLight intensity={0.5} />
    <OrbitControls maxZoom={1000} minZoom={100} />
    <directionalLight position={[10, 10, 10]} intensity={1} />
    <Suspense fallback={null}>
      <Ayaka position={[0, -1.5, 0]} rotation={[0, 0, 0]} />
    </Suspense>
  </Canvas>
);
export default Model;
