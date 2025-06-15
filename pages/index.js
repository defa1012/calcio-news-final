export default function Home() {
  return (
    <>
      <style jsx>{`
        nav img.logo {
          height: 42px;
          vertical-align: middle;
          margin-right: 0.5rem;
        }
      `}</style>

      <nav className="container-fluid">
        <ul>
          <li>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Soccer_ball_Icon.svg"
                className="logo"
                alt="GoalHub Logo"
              />
              <strong>GoalHub</strong>
            </a>
          </li>
        </ul>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Matches</a></li>
          <li><a href="#" role="button">Subscribe</a></li>
        </ul>
      </nav>

      <main className="container">
        <div className="grid">
          <section>
            <hgroup>
              <h2>Champions League Final 2025</h2>
              <h3>Drama Under the Lights</h3>
            </hgroup>
            <p>
              The UEFA Champions League final delivered another unforgettable night of football. With late goals and spectacular saves, fans were treated to a match for the ages.
            </p>
            <p>
              Europe’s biggest night delivered once again, with a jaw-dropping finish in the 89th minute. Fans across the world are still buzzing from the energy and intensity.
            </p>
            <figure>
              <img
                src="https://source.unsplash.com/featured/?football,stadium"
                alt="Football stadium at night"
              />
              <figcaption>
                <a
                  href="https://unsplash.com/s/photos/football"
                  target="_blank"
                  rel="noreferrer"
                >
                  Image via Unsplash
                </a>
              </figcaption>
            </figure>

            <h3>⚡ Player of the Match: João Martinez</h3>
            <p>
              The striker scored a stunning brace and provided an assist, securing his team the title and winning the hearts of millions.
            </p>

            <h3>🌍 Global Reactions</h3>
            <p>
              From Madrid to Mumbai, fans took to social media to share their
              celebrations, tears, and unforgettable memories of a night to
              remember.
            </p>
          </section>
        </div>
      </main>

      <section aria-label="Subscribe form">
        <div className="container">
          <article>
            <hgroup>
              <h2>Never Miss a Goal</h2>
              <h3>Join our mailing list for breaking news and match alerts</h3>
            </hgroup>
            <form className="grid" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                aria-label="Name"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                aria-label="Email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </article>
        </div>
      </section>

      <footer className="container">
        <small>
          <a href="#">Privacy Policy</a> • <a href="#">Terms</a>
        </small>
      </footer>
    </>
  );
}
