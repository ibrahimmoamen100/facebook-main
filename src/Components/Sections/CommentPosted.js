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
import "../../App.css";

export default function CommentPosted() {
  return (
    <div className="comment-posted">
      <div className="comment-titlebar">
        <NavLink to="/MyPage" className="user-img">
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
        <span>😂 تعا اشب شاي </span>
        <img src={user} />
      </div>
      <div className="like-comment">
        <div className="likes" data-tip data-for="like">
          <img src={haha} />
          <img src={like} />

          <ReactTooltip id="like" place="bottom" effect="solid">
            Ahmed Hamdy <br></br> Ahmed Hamdy <br></br> Ahmed Hamdy <br></br>
            Ahmed Hamdy <br></br> Ahmed Hamdy
          </ReactTooltip>
          <span style={({ color: "gray" }, { marginLeft: "3px" })}> 5 </span>
        </div>
        <span> 17 Comments </span>
      </div>
      <div className="do-like-comment">
        <div className="do-like">
          <i className="far fa-thumbs-up"></i>
          <span> Like</span>
        </div>
        <div className="do-comment">
          <i className="far fa-comment"></i>

          <span> Comment</span>
        </div>
        <div className="do-share">
          <i className="fas fa-share"></i>

          <span> Share</span>
        </div>
      </div>
    </div>
  );
}
