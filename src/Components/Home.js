import React from "react";
import MenuSection from "./MenuSection";
import "./Home.css";
import "./../App.css";
import SectionMid from "./SectionMid";
import Freinds from "./Freinds";
import styled from "styled-components";

const HomeSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1920px;
  min-width: 280px;
  margin: auto;
  padding: 2px;
  position: relative;
  margin-top: var(--mg-fixed);
`;
const firstSection = styled.div`
  justify-content: flex-start;
  align-self: flex-start;
`;
export default class Home extends React.Component {
  render() {
    return (
      <HomeSection className="home_section">
        {/* <h1>hello this Home Section</h1> */}
        {/* <div className="App">
          <button onClick={this.increase}>Increase</button>
          <div>{this.state.count}</div>
          <button onClick={this.decrease}>Decrease </button>
        </div> */}
        <firstSection className="first-section">
          <MenuSection />
        </firstSection>

        <div className="mid-section">
          <SectionMid />
        </div>
        <div className="last-section">
          <Freinds />
        </div>
      </HomeSection>
    );
  }
}
