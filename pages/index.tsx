import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { NextPage } from 'next';
import { AxesHelper } from 'three';
import Ayaka from './components/Ayaka';
import Layout from './components/Layout';

const Home: NextPage = () => (
  <Layout>
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <directionalLight position={[10, 10, 10]} />
      <primitive object={new AxesHelper(10)} />
      <Ayaka position={[0, -1.5, 0]} />
    </Canvas>
  </Layout>
);

export default Home;
