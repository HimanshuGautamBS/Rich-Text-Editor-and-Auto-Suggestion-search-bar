import React, { Component } from "react";
import "./App.css";
import countries from "./components/countries";
import Autocomplete from "./components/Autocomplete";
import PageContainer from "./components/PageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TextEditor">
          <h3>Text Editor</h3>
          <PageContainer />
        </div>
        <div className="App-components">
          <h3>Autocomplete</h3>
          <Autocomplete items={countries} />
        </div>
      </div>
    );
  }
}

export default App;
