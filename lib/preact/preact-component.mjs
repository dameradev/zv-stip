import { html, Component } from "htm/preact";

class Counter extends Component {
  state = {
    value: 0,
  };

  increment = () => {
    this.setState((prev) => ({ value: prev.value + 1 }));
  };

  render(props, state) {
    console.log(props, "props");
    return html`
      <div>
        <button onClick=${this.increment}>Increment</button>
        Counter: ${state.value}

        <ul>
          ${props.items.map((item) => html`<li>${item.text}</li>`)}
        </ul>
      </div>
    `;
  }
}

export default function (props) {
  return html`<${Counter} ...${props} />`;
}
