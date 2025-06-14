<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>GoalHub – Football News</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
    <style>
      nav img.logo {
        height: 42px;
        vertical-align: middle;
        margin-right: 0.5rem;
      }
    </style>
  </head>
  <body>
    <nav class="container-fluid">
      <ul>
        <li>
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Soccer_ball_Icon.svg" class="logo" alt="Logo" />
            <strong>GoalHub</strong>
          </a>
        </li>
      </ul>
      <ul>
        <li><a href="#">News</a></li>
        <li><a href="#">Live Scores</a></li>
        <li><a href="#" role="button">Subscribe</a></li>
      </ul>
    </nav>

    <main class="container">
      <div class="grid">
        <section>
          <hgroup>
            <h2>Champions League Final 2025</h2>
            <h3>Drama Under the Lights</h3>
          </hgroup>
          <p>Europe’s biggest night delivered once again, with a jaw-dropping finish in the 89th minute. Fans across the world are still buzzing from the energy and intensity.</p>
          <figure>
            <img src="https://source.unsplash.com/featured/?football,stadium" alt="Football stadium at night" />
            <figcaption><a href="https://unsplash.com/s/photos/football" target="_blank">Image via Unsplash</a></figcaption>
          </figure>

          <h3>⚡ Player of the Match: João Martinez</h3>
          <p>The striker scored a stunning brace and provided an assist, securing his team the title and winning the hearts of millions.</p>

          <h3>🌍 Global Reactions</h3>
          <p>From Madrid to Mumbai, fans took to social media to share their celebrations, tears, and unforgettable memories of a night to remember.</p>
        </section>
      </div>
    </main>

    <section aria-label="Subscribe form">
      <div class="container">
        <article>
          <hgroup>
            <h2>Never Miss a Goal</h2>
            <h3>Join our mailing list for breaking news and match alerts</h3>
          </hgroup>
          <form class="grid">
            <input type="text" id="name" name="name" placeholder="Your name" aria-label="Name" required />
            <input type="email" id="email" name="email" placeholder="Your email" aria-label="Email" required />
            <button type="submit" onclick="event.preventDefault()">Subscribe</button>
          </form>
        </article>
      </div>
    </section>

    <footer class="container">
      <small><a href="#">Privacy Policy</a> • <a href="#">Terms</a></small>
    </footer>
  </body>
</html>
