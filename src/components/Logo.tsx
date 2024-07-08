import { forwardRef, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Color } from "three";
import { ToonShader } from "../shaders/ToonShader";

interface LogoProps {
  colors: string[];
  brightnessThresholds: number[];
  [key: string]: any;
}

export const Logo = forwardRef<any, LogoProps>((props, ref) => {
  const { nodes, animations } = useGLTF("./ooo.glb") as any;
  const meshRef = useRef(null);
  const { actions } = useAnimations(animations, meshRef) as any;

  useEffect(() => {
    ToonShader.uniforms.colorMap.value = props.colors.map(
      (color) => new Color(color)
    );
    ToonShader.uniforms.brightnessThresholds.value = props.brightnessThresholds;
  }, [props.colors, props.brightnessThresholds]);

  useEffect(() => {
    if (actions.CurveAction) actions.CurveAction.play();
    if (actions.Curve001Action) actions.Curve001Action.play();
  }, [actions]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group ref={meshRef} name="Scene" rotation={[0, 1.6, 0]}>
        <mesh
          name="Curve"
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          position={[-0.013, 0.001, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={110.694}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve001"
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          position={[2.723, 0.066, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={110.694}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve002"
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          position={[-2.714, 0.063, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={110.694}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve003"
          castShadow
          receiveShadow
          geometry={nodes.Curve003.geometry}
          position={[-0.28, 0.021, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={110.694}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve004"
          castShadow
          receiveShadow
          geometry={nodes.Curve005.geometry}
          position={[-1.066, -0.052, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={110.694}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve005"
          castShadow
          receiveShadow
          geometry={nodes.Curve005.geometry}
          position={[1.729, -0.052, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={110.694}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve006"
          castShadow
          receiveShadow
          geometry={nodes.Curve006.geometry}
          position={[0.492, 0.106, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={110.694}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve007"
          castShadow
          receiveShadow
          geometry={nodes.Curve007.geometry}
          position={[-1.883, 0.207, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={110.694}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve008"
          castShadow
          receiveShadow
          geometry={nodes.Curve008.geometry}
          position={[1.106, 0.02, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={110.694}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
      </group>
    </group>
  );
});

useGLTF.preload("./SL_Test2.glb");
