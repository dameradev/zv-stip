// Located in _data/meta.js
module.exports = {
  // NOTE: `process.env.URL` is provided by Netlify, and may need
  // adjusted pending your host
  url: process.env.URL || "http://localhost:8080",
  siteName: "Здружение на возачи Штип",
  siteDescription:
    "Нашите услуги се дизајнирани да ги задоволат сите ваши потреби за регистрирање, осигурување и проверка на техничката исправност на вашето возило.",
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
