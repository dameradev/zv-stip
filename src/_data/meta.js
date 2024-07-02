// Located in _data/meta.js
module.exports = {
  // NOTE: `process.env.URL` is provided by Netlify, and may need
  // adjusted pending your host
  url: process.env.URL || "http://localhost:8080",
  siteName: "SpeedStack",
  siteDescription: "",
  authorName: "",
  twitterUsername: "", // no `@`
  primaryNavigation: [
    {
      route: "/",
      text: "Home",
    },
    {
      route: "/about",
      text: "About",
    },
    {
      route: "/rooms",
      text: "Rooms",
    },
  ],
};
