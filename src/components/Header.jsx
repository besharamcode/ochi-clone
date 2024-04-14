import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed z-50 w-full px-12 py-4 flex justify-between items-center font-thin font-['neueMontreal'] text-md">
      <Logo />
      <div className="links">
        <nav>
          {["Services", "Our work", "About us", "Insights", "Contact us"].map(
            (link) => {
              return (
                <a
                  key={link}
                  href={link}
                  className={`mr-8 capitalize tracking-wide ${
                    link === "Contact us" && "ml-[16vw] mr-0"
                  }`}
                >
                  {link}
                </a>
              );
            }
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
