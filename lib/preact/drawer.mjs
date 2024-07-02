import { html, Component } from "htm/preact";

class Drawer extends Component {
  state = {
    isOpen: false, // Start closed
    placement: "right-0", // Drawer opens from right
    maxScreenSize: "max-w-2xl", // Increased width for better display
  };

  // Toggle function for Drawer
  handleToggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    this.scrollLock(!this.state.isOpen);
  };

  // Handles click-away action
  handleClickAway = () => {
    this.setState({ isOpen: false });
    this.scrollLock(false);
  };

  // Function to lock or unlock scroll on the body when Drawer is open
  scrollLock = (lock) => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = lock ? "hidden" : "auto";
    }
  };

  render(props, state) {
    // Drawer transform animation
    const drawerTransform = state.isOpen
      ? "translateX(0%)"
      : "translateX(100%)";

    return html`
      <div class=" mt-2 flex ">
        <div class="m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 cursor-pointer hover:scale-110 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            onClick=${this.handleToggle}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <aside class="">
        <div
          class="  fixed inset-0 w-full h-full z-50"
          style=${{ visibility: state.isOpen ? "visible" : "hidden" }}
        >
          <div
            class="w-screen h-full cursor-pointer transition-opacity duration-500"
            style=${{
              opacity: state.isOpen ? "0.5" : "0",
              pointerEvents: state.isOpen ? "auto" : "none",
            }}
            onClick=${this.handleClickAway}
          />
          <div
            class="shadow-lg absolute right-0 top-0  bg-white transition-transform duration-300 h-full"
            style=${{
              width: state.maxScreenSize,
              transform: drawerTransform,
              overflowY: "auto",
            }}
          >
            <div class="px-10 pt-6">
              <h2 class="font-bold text-xl mb-4 text-black">SpeedStack</h2>
              <ul class="text-gray-800 list-none flex flex-col text-lg">
                ${props.items?.map(
                  (item) => html`
                    <li class="py-2 px-2 hover:bg-gray-100">
                      <a href="${item.route}">${item.text}</a>
                    </li>
                  `
                )}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    `;
  }
}

export default function (props) {
  return html`<${Drawer} ...${props} />`;
}
