import { useMemo, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Color } from "three";
import { Leva, useControls, folder } from "leva";
import {
  EffectComposer,
  Bloom,
  Pixelation,
  Noise,
  DepthOfField,
} from "@react-three/postprocessing";

export function FiberContainer() {
  const { High, High_Mid, Low_Mid, Low, Background } = useControls("Color", {
    Model: folder({
      High: "#ff4dd2",
      High_Mid: "#f2ff00",
      Low_Mid: "#ff0000",
      Low: "#5900ff",
    }),
    Background: folder({
      Background: "#484848",
    }),
  });

  const { Highlights, Midtones, Shadows } = useControls("Shader", {
    Highlights: { value: 0.87, min: 0, max: 1, step: 0.01 },
    Midtones: { value: 0.6, min: 0, max: 1, step: 0.01 },
    Shadows: { value: 0.0, min: 0, max: 1, step: 0.01 },
  });

  const { Threshold, Smoothing, Intensity, Amount, Opacity, Blur_Amount } =
    useControls("Effects", {
      Bloom: folder({
        Threshold: { value: 0.01, min: 0.01, max: 1, step: 0.01 },
        Smoothing: { value: 0, min: 0, max: 1, step: 0.01 },
        Intensity: { value: 1.4, min: 0, max: 5, step: 0.01 },
      }),
      Pixelate: folder({
        Amount: { value: 0, min: 0, max: 10, step: 0.1 },
      }),
      Noise: folder({
        Opacity: { value: 0.3, min: 0, max: 1.0, step: 0.01 },
      }),
      Blur: folder({
        Blur_Amount: { value: 10, min: 0, max: 20, step: 1.0 },
      }),
    });

  const colors = useMemo(
    () => [
      new Color(High).convertLinearToSRGB(),
      new Color(High_Mid).convertLinearToSRGB(),
      new Color(Low_Mid).convertLinearToSRGB(),
      new Color(Low).convertLinearToSRGB(),
    ],
    [High, High_Mid, Low_Mid, Low]
  );

  const brightnessThresholds = useMemo(
    () => [Highlights, Midtones, Shadows],
    [Highlights, Midtones, Shadows]
  );

  const [isCanvasReady, setIsCanvasReady] = useState(false);

  useEffect(() => {
    setIsCanvasReady(true);
  }, []);

  return (
    <div style={{ background: Background }} className="justify-self-center absolute h-full w-full">
      <div className="h-full z-0">
        <Canvas onCreated={() => setIsCanvasReady(true)} camera={{ position: [10, 0, 0], fov: 12 }}>
          <Scene colors={colors} brightnessThresholds={brightnessThresholds} />
          <OrbitControls minDistance={5} maxDistance={20} enablePan={false} enableRotate={true} />
          <EffectComposer enabled={true}>
            <Bloom
              luminanceThreshold={Threshold}
              luminanceSmoothing={Smoothing}
              height={480}
              intensity={Intensity}
              resolutionScale={1000}
              resolutionX={1080}
              resolutionY={1080}
            />
            <Pixelation granularity={Amount} />
            <Noise opacity={Opacity} />
            <DepthOfField
              focusDistance={0}
              focalLength={0}
              bokehScale={Blur_Amount}
              height={480}
            />
          </EffectComposer>
        </Canvas>
        {isCanvasReady && <Leva collapsed={false} />}
      </div>
    </div>
  );
}
