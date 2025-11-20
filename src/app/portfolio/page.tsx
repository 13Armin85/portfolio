import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>

          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <a href="https://weather-app-ty.netlify.app/">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src="/imgs/portfolio/weather.png" alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                    <h4>Web application</h4>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <a href="https://fava-website.netlify.app/">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src="/imgs/portfolio/fava.png" alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                    <h4>Web Development</h4>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            {/* <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Web Design</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div> */}
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            {/* <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Banner Design</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div> */}
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <a href="https://raeesiedu.com">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src="/imgs/portfolio/wordpress.png" alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                    <h4>Wordpress</h4>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <a href="https://arminnataj.ir">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src="/imgs/portfolio/portfolio.png" alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                    <h4>wordpress</h4>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
