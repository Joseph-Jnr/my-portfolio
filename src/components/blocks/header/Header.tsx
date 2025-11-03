import { Orbit } from "@/components";

const Header = () => {
  return (
    <>
      <header>
        <div className="md:tr--flex-row-between">
          <div className="intro-area">
            <h1 className="gradient--text">
              Frontend <br /> Developer.
            </h1>
            <p>
              Incorporating solid technical bases with creative user interface
              design to create unique products.
            </p>
          </div>

          <div className="orbit-wrapper">
            <Orbit />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
