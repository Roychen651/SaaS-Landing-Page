import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    // Section for the Hero component with responsive padding
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      {/* Scrollable anchor element named "hero" */}
      <Element name="hero">
        <div className="container">
          {/* Container for text content with max width for different breakpoints */}
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            {/* Subtitle text displaying the category */}
            <div className="caption small-2 uppercase text-p3">
              Streamlined Solutions
            </div>
            {/* Main heading text */}
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Simplify Your Digital Experience
            </h1>
            {/* Paragraph describing the product with responsive margins */}
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              At Roy SaaS, we redefine efficiency with cutting-edge solutions
              designed to enhance your operational agility and boost
              productivity. Discover the power of simplicity with our intuitive
              tools.
            </p>
            {/* LinkScroll component to navigate to "features" section smoothly */}
            <LinkScroll to="features" offset={-100} spy smooth>
              {/* Button component with icon and text */}
              <Button icon="/images/zap.svg">Experience Roy SaaS</Button>
            </LinkScroll>
          </div>

          {/* Absolute positioned hero image with responsiveness and positioning */}
          <div className="absolute -top-32 left-[calc(50%-300px)] w-[1200px] pointer-events-none hero-img_res">
            <img
              src="/images/heroGen.png"
              className="size-1200 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
