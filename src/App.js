import React from 'react';
import { Canvas } from 'react-three-fiber'
import Box from './components/Box'

function App() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 0]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
