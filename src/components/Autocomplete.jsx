import React, { Component } from "react";
import "./AutoCompleteText.css";

export default class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = { suggestions: [], text: "" };
  }

  onTextChanged = (e) => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter((v) => regex.test(v));
      console.log(regex);
    }
    this.setState(() => ({ suggestions, text: value }));
    console.log(value + "  " + value.length);
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className="AutoCompleteText">
        <input value={text} onChange={this.onTextChanged} type="text" />
        {this.renderSuggestions()}
      </div>
    );

    //   <div>
    //     <button>toggle</button>
    //     <h1>{this.props.text}</h1>
    //   </div>
    // );
  }
}
