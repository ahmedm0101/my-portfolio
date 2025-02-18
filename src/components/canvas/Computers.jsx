import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import CanvasLoader from "../Loader";

const Computers = () => {
  const pc = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} />

      
    </mesh>
  );
};

export default Computers;
