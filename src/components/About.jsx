const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.25"
      className="w-full bg-[#CDEA68] py-1 relative text-[#212121] h-full rounded-2xl z-10"
    >
      <h2 className=" sm:text-[3.5vw] sm:leading-[4vw] text-[4.5vw] leading-[5vw] px-12 pb-20 font-black font-['neueMontreal'] sm:w-5/6 w-full mt-24 tracking-wide">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to <span className="border-b-[3px] border-[#212121]">raise funds</span>,{" "}
        <span className="border-b-[3px] border-[#212121]">sell prod­ucts</span>,{" "}
        <span className="border-b-[3px] border-[#212121]">
          ex­plain com­plex ideas
        </span>
        , and{" "}
        <span className="border-b-[3px] border-[#212121]">hire great</span>
        peo­ple.
      </h2>
      <div className="border-b-[2px] border-[#4d4d4d42] w-full"></div>
      <div className="flex px-12 w-full justify-between items-start mt-4">
        <div className=" font-black font-['neueMontreal'] w-1/2">
          <h2 className="text-[3.5vw] leading-none pb-10  w-5/6  tracking-wide">
            Our approach:
          </h2>
          <a
            href=""
            className="bg-[#212121] text-sm text-white px-7 py-[1.3rem] rounded-full tracking-wide font-black"
          >
            READ MORE{" "}
            <span className="inline-block size-2 bg-white rounded-full ml-9"></span>
          </a>
        </div>
        <div className="w-1/2 mb-12">
          <img
            className="rounded-lg w-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
