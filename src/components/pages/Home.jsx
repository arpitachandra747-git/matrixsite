import Header from "../layouts/Header";
import Script from "../layouts/Script";
import Contact from "./Contact";
import Parallax from "./Parallax";
import Services from "./Services";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <main
        id="primary"
        className="site-main sk__homepage sk__home-combo-slider dark-shade-1-bg"
      >
        {/* Master Curtain */}
        {/* <section className="sk__master-curtain">
          <div className="mcurtain mcurtain-left"></div>
          <div className="mcurtain mcurtai  n-center"></div>
          <div className="mcurtain mcurtain-right"></div>
        </section> */}

        {/* Back To Top */}
        <div className="sk__back-to-top-wrap">
          <a className="sk__back-to-top" href="#smooth-content">
            <span className="sk__back-to-top"></span>
          </a>
        </div>

        <Header />

        <div id="smooth-wrapper" className="pushable-content">
          <div id="smooth-content">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="sk__hero-section">
              {/* Carousel */}
              <div
                id="sk__hero-carousel-slider"
                className="carousel slide dark-shade-1-bg"
              >
                {/* Hero Dots Navigation */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#sk__hero-carousel-slider"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#sk__hero-carousel-slider"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                  {/* Slide 1 - Image Background */}
                  <div className="carousel-item zooming active hero-slide-1 sk__hero-slider-item sk__image-back-cover">
                    <section className="sk__parallax-background-section sk__hero-item-theme-style">
                      {/* Parallax Background */}
                      <div
                        className="sk__parallax-background-element sk__absolute sk__image-back-cover"
                        style={{
                          backgroundImage: "url('/assets/images/hero-bg.jpg')",
                        }}
                      ></div>

                      <div className="flex-helper-div"></div>

                      {/* Main Hero Heading */}
                      <div className="hero-h1-box">
                        <div className="cover-text-wrapper">
                          <h1 className="hero-h1 animated-element phase-1 text-center text-md-start text-white">
                            Consultants
                            <br />
                            Advisors
                            <br />
                            Partners
                          </h1>
                        </div>
                      </div>

                      {/* Bottom Left Box */}
                      <div className="hero-box-bottom-left text-center text-sm-start">
                        <div className="d-flex">
                          <a
                            className="btn btn-outline-light animated-element phase-1 mb-4"
                            href="#"
                            role="button"
                          >
                            SEE PROJECT
                          </a>
                          <a
                            className="btn btn-outline-light animated-element phase-1 mb-4"
                            href="#"
                            role="button"
                          >
                            GET STARTED NOW
                          </a>
                        </div>

                        <div className="cover-text-wrapper">
                          <h3 className="animated-element phase-1 text-center text-sm-start text-white">
                            Low Profile <strong>High Impact</strong>
                          </h3>
                        </div>

                        <div className="cover-text-wrapper">
                          <p className="hero-box-p animated-element phase-1 text-center text-sm-start text-white">
                            Systems that think ahead to anticipate risks before
                            they surface.
                          </p>
                        </div>
                      </div>

                      {/* Bottom Right Box */}
                      <div className="hero-box-bottom-right text-center text-sm-start">
                        <div className="cover-text-wrapper">
                          <span className="big-abbreviated-heading animated-element phase-2 text-white">
                            Effective
                          </span>
                        </div>

                        <div className="cover-text-wrapper">
                          <p className="animated-element phase-2 text-white">
                            Discreet
                          </p>
                        </div>

                        <div className="cover-text-wrapper">
                          <h4 className="animated-element phase-2 text-white">
                            INFORMED
                          </h4>
                        </div>
                      </div>
                    </section>
                  </div>
                  {/* End Slide 1 */}

                  {/* Slide 2 - Video Background */}
                  <div className="carousel-item zooming hero-slide-2 sk__hero-slider-item sk__image-back-cover">
                    <section className="sk__video-background-section sk__hero-item-theme-style">
                      {/* Video Background */}
                      <div className="sk__video-container sk__parallax-hero-video sk__absolute sk__image-back-cover">
                        <div
                          className="sk__pattern-overlay"
                          style={{ opacity: 0.37 }}
                        ></div>

                        <div
                          className="sk__absolute sk__gradient-back-v1"
                          style={{ opacity: 0 }}
                        ></div>

                        <video
                          className="sk__video"
                          preload="none"
                          poster="/assets/video/hero-video-main.jpg"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source
                            src="/assets/video/hero-bg-2.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support HTML5 video.
                        </video>
                      </div>

                      <div className="flex-helper-div"></div>

                      {/* Main Hero Heading */}
                      <div className="hero-h1-box">
                        <div className="cover-text-wrapper">
                          <h1 className="hero-h1 animated-element phase-1 text-center text-md-start text-white">
                            Consultants 
                            <br />
                            Advisors 
                            <br />
                            Partners
                          </h1>
                        </div>
                      </div>

                      {/* Bottom Left Box */}
                      <div className="hero-box-bottom-left text-center text-sm-start">
                         <div className="d-flex">
                          <a
                            className="btn btn-outline-light animated-element phase-1 mb-4"
                            href="#"
                            role="button"
                          >
                            SEE PROJECT
                          </a>
                          <a
                            className="btn btn-outline-light animated-element phase-1 mb-4"
                            href="#"
                            role="button"
                          >
                            GET STARTED NOW
                          </a>
                        </div>
                        <div className="cover-text-wrapper">
                          <h3 className="animated-element phase-1 text-center text-sm-start text-white">
                            Low Profile <strong>High Impact</strong>
                          </h3>
                        </div>

                        <div className="cover-text-wrapper">
                          <p className="hero-box-p animated-element phase-1 text-center text-sm-start text-white">
                           Systems that think ahead to anticipate risks before they surface.
                          </p>
                        </div>
                      </div>

                      {/* Bottom Right Box */}
                      <div className="hero-box-bottom-right text-center text-sm-start">
                        <div className="cover-text-wrapper">
                          <span className="big-abbreviated-heading animated-element phase-2 text-white">
                            INFORMED
                          </span>
                        </div>

                        <div className="cover-text-wrapper">
                          <p className="animated-element phase-2 text-white">
                           Discreet
                          </p>
                        </div>

                        <div className="cover-text-wrapper">
                          <h4 className="animated-element phase-2 text-white">
                            EFFECTIVE
                          </h4>
                        </div>
                      </div>
                    </section>
                  </div>
                  {/* End Slide 2 */}
                </div>

                {/* Carousel Arrows */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#sk__hero-carousel-slider"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#sk__hero-carousel-slider"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </section>

            {/* Hero Section */}

            {/** Parallax Section */}
            <Parallax />

            {/** Services Section */}
            <Services />

            {/** Testimonials Section */}
              <Testimonials/>

            {/** Contact Section */}
              <Contact/>
          </div>
        </div>
      </main>

      {/* <Script /> */}
    </>
  );
}
