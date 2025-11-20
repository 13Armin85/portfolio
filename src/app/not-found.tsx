export default function NotFound() {
  return (
    <main className="section not-found" id="not-found">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Page Not Found</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="padd-15"
            style={{ width: "100%", textAlign: "center" }}
          >
            <img
              src="/imgs/404.png"
              alt="404 Not Found"
              style={{ maxWidth: 600, width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
