import { html, Component } from "htm/preact";

class Marquee extends Component {
  render(props) {
    const marqueeStyle = {
      whiteSpace: "nowrap",
      display: "inline-block",
      overflow: "hidden",
      animation: `scroll ${props.speed || 10}s linear infinite`,
      // paddingLeft: "50px",
      paddingRight: "150px",
    };

    return html`
      <div
        class="marquee flex gap-20 bg-black text-5xl py-20"
        style="position: relative;"
      >
        <div style=${marqueeStyle} class="flex overflow-visible">
          ${props.message?.map(
            (msg) =>
              html`<p
                class="marquee-content text-4xl inline font-serif"
                style="padding-right:100px;"
              >
                ${msg}
              </p>`
          )}
        </div>
      </div>
      <style>
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }

          50% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-100%);
          }
        }
      </style>
    `;
  }
}

export default function App(props) {
  return html` <${Marquee} ...${props} /> `;
}
