import React from "react";
import { Router, NavLink, Link } from "react-router-dom";
import statistics from "../image/statistics.png";
import heart from "../image/heart.png";
import freinds from "../image/freinds.png";
import flag from "../image/flag.png";
import watch from "../image/watch.png";
import massenger from "../image/massenger.png";
import marketplace from "../image/marketplace.png";
import group from "../image/group.png";
import "./MenuSection.css";

export default function MenuSection() {
  return (
    <div className="MenuSection">
      <ul className="menu_list">
        {/* <NavLink to="/" className="heart">
          <img src={heart} />
          <span> Covid-19 Information Center</span>
        </NavLink> */}

        <NavLink to="/Freinds" className="Freinds">
          <img src={freinds} />
          <span>Find Freinds</span>
        </NavLink>
        <NavLink to="/" className="flag">
          <img src={flag} />
          <span>Pages</span>
        </NavLink>
        <NavLink to="/Watch" className="watch">
          <img src={watch} />
          <span>Watch</span>
        </NavLink>
        <NavLink to="/Massenger" className="massenger">
          <img src={massenger} />
          <span>Massenger</span>
        </NavLink>
        <NavLink to="/Marketplace" className="marketplace">
          <img src={marketplace} />
          <span>Marketplace</span>
        </NavLink>
        <NavLink to="/Group" className="group">
          <img src={group} />
          <span>Group</span>
        </NavLink>
      </ul>
      {/* <h1>Hello from menu</h1> */}
    </div>
  );
}
