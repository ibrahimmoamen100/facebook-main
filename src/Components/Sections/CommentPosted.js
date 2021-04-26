import React from "react";
import "./CommentPosted.css";
import user from "../../image/cc.jpg";
import { NavLink } from "react-router-dom";

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
        <span>lorem ipsum dolor sit amet, consectetur adip</span>
      </div>
    </div>
  );
}
