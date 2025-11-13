export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img src="/imgs/Armin.png" alt="Profile" className="shadow-dark" />
            <h1>Armin Nataj</h1>
            <p>Full stack developer</p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://github.com/13Armin85" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/armin.n.t.j/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/armin-nataj/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
