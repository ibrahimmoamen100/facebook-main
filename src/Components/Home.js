import React from "react";
import MenuSection from "./MenuSection";
import "./Home.css";
import "./../App.css";
import SectionMid from "./SectionMid";
import Freinds from "./Freinds";
export default class Home extends React.Component {
  state = {
    count: 0,
  };
  decrease = () => {
    this.setState({
      count: this.state.count <= 0 ? this.state.count : this.state.count - 1,
    });
  };
  increase = () => {
    this.setState({
      count: this.state.count >= 10 ? this.state.count : this.state.count + 1,
    });
  };
  render() {
    return (
      <div className="home_sections">
        {/* <h1>hello this Home Section</h1> */}
        {/* <div className="App">
          <button onClick={this.increase}>Increase</button>
          <div>{this.state.count}</div>
          <button onClick={this.decrease}>Decrease </button>
        </div> */}
        <div className="first-section">
          <MenuSection />
        </div>

        <div className="mid-section">
          <SectionMid />
        </div>
        <div className="last-section">
          <Freinds />
        </div>
      </div>
    );
  }
}
