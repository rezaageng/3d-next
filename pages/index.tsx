import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { NextPage } from 'next';
import { AxesHelper } from 'three';
import Ayaka from './components/Ayaka';

import Layout from './components/Layout';

const Home: NextPage = () => (
  <Layout>
    <Canvas orthographic={true} camera={{ zoom: 200, position: [0, 0, 100] }}>
      <ambientLight intensity={0.5} />
      <OrbitControls maxZoom={1000} minZoom={100} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Ayaka position={[0, -1.5, 0]} rotation={[0, 0, 0]} />
    </Canvas>
  </Layout>
);

export default Home;
