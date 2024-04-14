import { useEffect } from "react";
import { useState } from "react";

const Eye = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const deltaX = e.clientX - window.innerWidth / 2;
      const deltaY = e.clientY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.5"
      className="w-full h-screen overflow-hidden relative"
    >
      <div className="bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-5 ">
          <div className="rounded-full size-[15vw] bg-white flex items-center justify-center">
            <div className="bg-zinc-900 size-[9vw] rounded-full flex items-center justify-center">
              <div
                style={{ rotate: `${rotate}deg` }}
                className={`w-full h-fit`}
              >
                <div className="bg-white size-[1.5rem] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="rounded-full size-[15vw] bg-white flex items-center justify-center">
            <div className="bg-zinc-900 size-[9vw] rounded-full flex items-center justify-center">
              <div
                style={{ rotate: `${rotate}deg` }}
                className={`w-full h-fit`}
              >
                <div className="bg-white size-[1.5rem] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
