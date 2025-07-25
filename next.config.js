/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
import '../styles/globals.css';
import 'https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
