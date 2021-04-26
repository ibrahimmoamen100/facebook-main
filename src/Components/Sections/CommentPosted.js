import React from "react";
import "./CommentPosted.css";
import user from "../../image/cc.jpg";
import like from "../../image/like.svg";
import angry from "../../image/angry.svg";
import haha from "../../image/haha.svg";
import wow from "../../image/wow.svg";
import care from "../../image/care.svg";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";

export default function CommentPosted() {
  return (
    <div className="comment-posted">
      <div className="comment-titlebar">
        <NavLink to="/Freinds" className="user-img">
          <img src={user} />
        </NavLink>
        <div className="username-time">
          <NavLink to="/Freinds">Ahmed Hamdy</NavLink>
          <span>
            April 13 at 1:26 PM · Shared with puplic '
            <i className="fas fa-globe-americas"></i>
          </span>
        </div>
        <div className="option-comment">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="comment-content">
        <span>
          lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </span>
        <img src={user} />
      </div>
      <div className="like-comment">
        <div className="likes" data-tip data-for="like">
          <img src={like} />
          <img src={angry} />

          <ReactTooltip id="like" place="bottom" effect="solid">
            Ahmed Hamdy <br></br> Ahmed Hamdy <br></br> Ahmed Hamdy <br></br>
            Ahmed Hamdy <br></br> Ahmed Hamdy
          </ReactTooltip>
          <span style={({ color: "gray" }, { marginLeft: "3px" })}> 5 </span>
        </div>
        <span> 17 Comments </span>
      </div>
    </div>
  );
}
