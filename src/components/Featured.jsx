import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHoverStart = (index) => {
    cards[index].start({ y: 0 });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-speed=".1" className="pt-32">
      <h2 className="text-5xl font-black font-['neueMontreal'] px-12">
        Featured projects
      </h2>
      <div className="border-t-[2px] border-[#4d4d4d42] w-full px-12 mt-12">
        <div className="flex justify-between items-center mt-14 gap-4">
          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="w-1/2 card relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="size-3 rounded-full bg-white "></div>
              <p className="font-['neueMontreal'] text-sm">FYDE</p>
            </div>
            <h3 className="text-6xl overflow-hidden font-bebasNeue flex text-[#CDEA68] bg-transparent z-10 absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"FYDE".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.05 }}
                  className={`letter-${index} inline-block`}
                >
                  {letter}
                </motion.span>
              ))}
            </h3>
            <div className="bg-zinc-900 h-[90vh] overflow-hidden rounded-xl img relative">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png "
                className="bg-cover w-full h-full "
                alt=""
              />
            </div>
            <div className="buttons flex items-center gap-4 mt-4">
              {["AUDIT", "COPYWRITING", "SALES deck", "slides design"].map(
                (word, i) => {
                  return (
                    <button
                      className="uppercase border px-4 py-[0.35rem] tracking-wide rounded-full font-light"
                      key={i}
                    >
                      {word}
                    </button>
                  );
                }
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="w-1/2 card relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="size-3 rounded-full bg-white "></div>
              <p className="font-['neueMontreal'] text-sm">VISE</p>
            </div>
            <h3 className="text-6xl flex overflow-hidden font-bebasNeue text-[#CDEA68] bg-transparent z-10 absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2">
              {"VISE".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.05 }}
                  className={`letter-${index} inline-block`}
                >
                  {letter}
                </motion.span>
              ))}
            </h3>
            <div className="bg-slate-300 h-[90vh] rounded-xl overflow-hidden img">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                className="bg-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="buttons flex items-center gap-4 mt-4">
              {["agency", "company presentation"].map((word, i) => {
                return (
                  <button
                    className="uppercase border px-4 py-[0.35rem] tracking-wide rounded-full font-light"
                    key={i}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <a
        href=""
        className="bg-[#212121] text-sm text-white uppercase px-7 py-[1.3rem] font-['neueMontreal'] rounded-full tracking-wide font-black w-fit mx-auto block mt-10"
      >
        View all case studies
        <span className="inline-block size-2 bg-white rounded-full ml-9"></span>
      </a>
    </div>
  );
};

export default Featured;
