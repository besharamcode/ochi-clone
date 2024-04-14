const Cards = () => {
  const cardData = [
    {
      img: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
      button: "2019-2022",
    },
    {
      img: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
      button: "Rating 5.0 on clutch",
    },
    {
      img: "https://ochi.design/wp-content/uploads/2022/04/logo003.png",
      button: "business bootcamp alumni",
    },
  ];
  return (
    <div className="w-full relative h-screen px-12 mt-20 pt-20 border-t-[2px] border-[#4d4d4d42]">
      <div className="cards flex justify-between items-center gap-4 w-full translate-y-1/4">
        {cardData.map((card, i) => (
          <div
            key={i}
            className={`h-[25rem] relative rounded-xl ${
              i === 0 ? "bg-[#004D43] w-[200vw]" : "bg-zinc-900 w-full"
            } cursor-pointer`}
          >
            <img
              src={card.img}
              alt=""
              className={`bg-cover ${
                i === 2 && "rounded-xl w-[6rem]"
              } w-[10rem] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            />
            <button
              className={`absolute bottom-4 left-5 ${
                i === 0
                  ? "text-[#CDEA68] border border-[#CDEA68]"
                  : "text-white border"
              } px-4 py-1 rounded-full uppercase text-sm font-md `}
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
