import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }


  handleChange = (change) => {
    this.setState({
      message: change.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange={this.handleChange}
        value={this.state.message}
        type="text" name="message" id="message" />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
