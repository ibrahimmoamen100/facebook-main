import React, { Fragment } from "react";
import MenuSection from "./MenuSection";
import styled from "styled-components";

const MenPage = styled.div`
  position: absolute;
  top: 0px;
  min-height: 100vh;
`;
export default function MenuPage() {
  return (
    <Fragment>
      <MenPage className="menu-page">
        <MenuSection />
      </MenPage>
    </Fragment>
  );
}
