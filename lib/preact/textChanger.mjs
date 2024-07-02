import { html, Component } from "htm/preact";

class TextChanger extends Component {
  state = {
    currentMessageIndex: 0,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer = () => {
    this.timer = setInterval(this.nextMessage, this.props.interval || 3000); // Default interval is 3000ms
  };

  clearTimer = () => {
    clearInterval(this.timer);
  };

  nextMessage = () => {
    this.setState((prevState) => ({
      currentMessageIndex:
        (prevState.currentMessageIndex + 1) % this.props.messages.length,
    }));
  };

  render(props, state) {
    const currentMessage = props.messages?.[state.currentMessageIndex];
    return html`
      <span class="mt-10 bg-green-100 text-green-700">${currentMessage}</span>
    `;
  }
}

export default function (props) {
  return html`<${TextChanger} ...${props} />`;
}
