import React, { Component } from "react";
import "../styles/Contact.css";

class Contact extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  sendMessage = (e) => {
    e.preventDefault();
    console.log(`Wiadomość wysłana: ${this.state.value}`);
  };
  render() {
    return (
      <div className="contact-wrapper">
        <h1>Napisz do nas!</h1>
        <form onSubmit={this.sendMessage}>
          <textarea
            onChange={this.handleChange}
            rows="15"
            cols="50"
            placeholder="Napisz do nas :)"
          ></textarea>
          <input type="submit" value="Wyślij" />
        </form>
      </div>
    );
  }
}

export default Contact;
