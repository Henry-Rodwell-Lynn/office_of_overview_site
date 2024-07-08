import { FiberContainer } from "../components/FiberContainer";
import { Leva } from "leva";

export default function Slide10() {

  return (
    <>
      <div className="relative bg-[black] min-h-screen text-white overflow-hidden z-50">
        {/* Top Line */}
        <div className="absolute top-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>

          {/* Link */}
          <div className="mt-4 flex justify-between z-50">
            <a>Custom ShaderKit</a>
            <div className="flex gap-4">
              <a href={`Slide-9`}>◂ Prev</a>
              <a href={`Slide-11`}>Next ▸</a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full h-full">
          <div className="">
            <FiberContainer />
          </div>
          <div>
            <Leva collapsed={false} />
          </div>
        </div>
      </div>
    </>
  );
}
