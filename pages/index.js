<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Palla Lunga e Pedalare</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
    <style>
      nav img.logo {
        height: 50px;
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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAF4CAYAAACc4b6bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFg0lEQVR4nO3dT47kOBQF0P7/HzU9oQmcOQ4Vo8ku3SOIA3OwR2XumFb5nnc8EAJQkM06YkAAAAAIDfq4dLzzZ9zvP/8zEAAAAAAAAAAABgZc1mrGtrptQy/fbm6+Z0PXW4TqZ1X7TPVrva5KrU0u1+Pvl9TzWfVfZrHTl1nRb5rPRZ7/38XqZ/7cmmluv3qU0p9t+Ha9Wy4WsNRu/t4fnq0t+mzA/1ejyZtSuZ3n1G63bfqcx0kPtXrr0ZK9/ozP0ZPtu/lnTz3X+z8d9q19S6R4vK1Zb14fT1TtN3b2zOuqB2n1XZ/ULenlfdb7cNz+sy0tvl/pne1mVLmjNu/mM1VbqYjXmmv4UlY3n7kO0HK2m3mjOv7/VrOqsbdG+pdZV3X/WP22D2mPVUXzZdkW43Xqe33UTv4mvVDPazWv6WtL7ab0Wv9UDZ2+9jeq1vlTqeqfWW+U61TPvqrXnJfxaqle1rLXeZq+Jv1c7aznqPb+2nqrfuI+qNZn1bdRr9TZ9T7X29O+qL7WnqXL6RtHbTfyOvULdb5OqbfU21zva01zT9J/TK7X1PbqR0nT1Z93XTzVWvUV1vnmn9UrDft3zXelHXV+3nbVqzvqU31G+6g0T9nPvlZq/aNRg8n9a9Yf79U3rTta/VGpvtqWutR6P1o9m3Wu0r9Oe3mqWq+6geqP1qtpPW3Vqz1HOq13vVm3uVlY/u6r9Xb0+tGpddV/rf/Us6hvUX1eyc/mq20fs34V9PL1s6qL7erVPdrla3mj1s8UbdZdVV0U71+6q3t1OprWJ1V7XvdP2pn6XvW+7u7V6U7Vr3K3Vm3rCtdq1YvtmrdUq7Z13XHXN75dKXcrffr5r9ZKtf/Wa9rvaO4bP6Yx09nbRU3+edSAAAAAAAAAAAA4Pf9H4aXnQz/VUuyAAAAAElFTkSuQmCC" alt="Palla Lunga e Pedalare Logo" class="logo" />
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
            <h2>Champions League Final</h2>
            <h3>Thriller Under the Lights</h3>
          </hgroup>
          <p>The UEFA Champions League final delivered another unforgettable night of football. With late goals and spectacular saves, fans were treated to a match for the ages.</p>
          <figure>
            <img src="https://source.unsplash.com/featured/?football,stadium" alt="Football stadium" />
            <figcaption><a href="https://unsplash.com/s/photos/football-stadium" target="_blank">Photo via Unsplash</a></figcaption>
          </figure>

          <h3>Star Player of the Match</h3>
          <p>Forward John Marquez scored two goals and assisted another, cementing his status as one of Europe’s top talents.</p>

          <h3>Fan Reactions</h3>
          <p>Supporters from both sides shared excitement and heartbreak as social media exploded with reactions and celebrations across the world.</p>
        </section>
      </div>
    </main>

    <section aria-label="Subscribe example">
      <div class="container">
        <article>
          <hgroup>
            <h2>Never Miss a Goal</h2>
            <h3>Subscribe for the latest news and live match updates</h3>
          </hgroup>
          <form class="grid">
            <input type="text" id="firstname" name="firstname" placeholder="First Name" aria-label="First Name" required />
            <input type="email" id="email" name="email" placeholder="Email" aria-label="Email" required />
            <button type="submit" onclick="event.preventDefault()">Subscribe</button>
          </form>
        </article>
      </div>
    </section>

    <footer class="container">
      <small><a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a></small>
    </footer>
  </body>
</html>
