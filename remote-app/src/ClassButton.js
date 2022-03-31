import React from "react";

const _style = {
  background: "#4b4be8",
  color: "#fff",
  padding: 12,
};

class ClassButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    const { style, title } = this.props;
    return (
      <>
        <button
          style={style || _style}
          onClick={() => {
            this.setState({ text: "aaaaa" });
          }}
        >
          {title || "Class type Remote Button"}
        </button>
        <div>{this.state.text}</div>
      </>
    );
  }
}

export default ClassButton;
