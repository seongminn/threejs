import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

function CubeMesh() {
  const mesh = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useFrame(() => {
    mesh.current.rotation.y = mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh onClick={(e) => setIsClicked(!isClicked)} ref={mesh} scale={1}>
      {isClicked ? (
        <sphereBufferGeometry attach="geometry" />
      ) : (
        <boxBufferGeometry attach="geometry" position={[10, 10, 0]} />
      )}
      <meshLambertMaterial attach="material" color={"#feca57"} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas
      flat
      linear
      style={{
        backgroundColor: "#080b0e",
        height: "100vh",
      }}
    >
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={5}
        saturation={0}
        fade={true}
      />
      <OrbitControls rotateSpeed={0.1} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <CubeMesh />
    </Canvas>
  );
}

export default App;
