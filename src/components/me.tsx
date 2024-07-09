import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import MyModel from "./Me-model";

const MeCanvas = () => {
  return (
    <Canvas
      camera={{ position: [50, 0, 0], fov: 12.5 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <ambientLight />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
      <MyModel />
      {/* </Suspense> */}
      <Preload all />
    </Canvas>
  );
};

export default MeCanvas;
