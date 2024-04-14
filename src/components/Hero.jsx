import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="bg-zinc-800 w-full h-full pt-1 pb-20">
      <div className="px-12 mt-40 pb-20">
        <h1 className="text-[8vw] font-bold leading-[7vw] font-bebasNeue tracking-wide">
          {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((word, i) => {
            return (
              <div className="markers flex" key={i}>
                {i === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw]  relative top-[0.2vw] mr-[1vw]"
                  >
                    <img
                      className="h-[5.8vw] object-cover rounded-md"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <div className="" key={word}>
                  {word}
                </div>
              </div>
            );
          })}
        </h1>
      </div>
      <hr className="border-gray-500" />
      <div className="px-12">
        <div className="flex justify-between items-center mt-3">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((word) => {
            return (
              <p
                className="tracking-wide font-thin font-['neueMontreal']"
                key={word}
              >
                {word}
              </p>
            );
          })}
          <a href="" className="flex justify-evenly items-center gap-2">
            <div className="uppercase border border-gray-500 tracking-wide text-sm font-['neueMontreal'] px-4 py-2 rounded-full">
              Start the project
            </div>
            <div className="border border-gray-500 flex justify-center items-center rounded-full size-[35px] text-2xl">
              <i className="ri-arrow-right-up-line"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
