import React, { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

type MyModelProps = React.ComponentProps<"group"> & {
  // Add any additional props here
};

const MyModel = (props: MyModelProps) => {
  const group = useRef<THREE.Group>(null);
  const { nodes } = useGLTF(
    "/textured_mesh_medpoly_glb.glb"
  ) as GLTFResult;
 
  const { size } = useThree();
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });

  const initialRotation = Math.PI * 10 / 18; // This is equivalent to [0, 10, 0] in radians

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Adjust these multipliers to control the rotation range
      setTargetRotation({ 
        x: y * Math.PI / 8, // Vertical rotation (nod)
        y: x * Math.PI / 4 + initialRotation // Horizontal rotation (turn), adjusted for initial rotation
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  useFrame(() => {
    if (group.current) {
      // Interpolate current rotation towards target rotation
      group.current.rotation.x += (targetRotation.x - group.current.rotation.x) * 0.05;
      group.current.rotation.y += (targetRotation.y - group.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" rotation={[0, initialRotation, 0]}>
        <hemisphereLight intensity={0.5} groundColor="black" />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <ambientLight intensity={0.2} />
        {Object.entries(nodes).map(([nodeName, mesh]) => (
          <mesh
            key={nodeName}
            castShadow
            receiveShadow
            geometry={mesh.geometry}
            material={mesh.material}
          />
        ))}
      </group>
    </group>
  );
};

useGLTF.preload("/textured_mesh_medpoly_glb.glb");
export default MyModel;