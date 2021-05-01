import React from "react";
import "./CommentPosted.css";
import user from "../../image/my.jpg";
import osama from "../../image/ss.jpg";
import like from "../../image/like.svg";
import angry from "../../image/angry.svg";
import haha from "../../image/haha.svg";
import wow from "../../image/wow.svg";
import love from "../../image/love.png";
import care from "../../image/care.svg";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import "../../App.css";
import { Fragment } from "react";

export default function CommentPosted() {
  return (
    <Fragment>
      <div className="comment-posted">
        <div className="comment-titlebar">
          <NavLink to="/MyPage" className="user-img">
            <img src={user} />
          </NavLink>
          <div className="username-time">
            <NavLink to="/Freinds">IBrahim Moamen</NavLink>
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
          <span>صلي علي الحبيبي صلي الله عليه وسلم</span>
        </div>
        <div className="like-comment">
          <div className="likes" data-tip data-for="like">
            <img src={love} />
            <img src={like} />

            <ReactTooltip id="like" place="bottom" effect="solid">
              Ahmed Hamdy <br></br> IBrahim Moamen<br></br> Mohamed Hassan{" "}
              <br></br>
              Ahmed Hamdy <br></br> IBrahim Moamen<br></br> Mohamed Hassan{" "}
              <br></br>
              Ahmed Hamdy <br></br> IBrahim Moamen<br></br> Mohamed Hassan{" "}
              <br></br>
              Zeiad Bakr <br></br> Ahmed Nasser<br></br> ...and 985k more
            </ReactTooltip>
            <span style={({ color: "gray" }, { marginLeft: "3px" })}>
              {" "}
              985k{" "}
            </span>
          </div>
          <span> 1k Comments </span>
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
      <div className="comment-posted">
        <div className="comment-titlebar">
          <NavLink to="/MyPage" className="user-img">
            <img src={user} />
          </NavLink>
          <div className="username-time">
            <NavLink to="/Freinds">IBrahim Moamen</NavLink>
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
            ❤❤ شكرا للبشمهندس اسامه الزيرو علي كل العلم اللي قدمهلنا ربنا يجعلو
            في ميزان حسناته
          </span>
          <img src={osama} />
        </div>
        <div className="like-comment">
          <div className="likes" data-tip data-for="like">
            <img src={love} />
            <img src={like} />

            <ReactTooltip id="like" place="bottom" effect="solid">
              Ahmed Hamdy <br></br> IBrahim Moamen<br></br> Mohamed Hassan{" "}
              <br></br>
              Ahmed Hamdy <br></br> IBrahim Moamen<br></br> Mohamed Hassan{" "}
              <br></br>
              Ahmed Hamdy <br></br> IBrahim Moamen<br></br> Mohamed Hassan{" "}
              <br></br>
              Zeiad Bakr <br></br> Ahmed Nasser<br></br> ...and 985k more
            </ReactTooltip>
            <span style={({ color: "gray" }, { marginLeft: "3px" })}>
              {" "}
              985k{" "}
            </span>
          </div>
          <span> 1k Comments </span>
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
      <div className="comment-posted">
        <div className="comment-titlebar">
          <NavLink to="/MyPage" className="user-img">
            <img src={user} />
          </NavLink>
          <div className="username-time">
            <NavLink to="/Freinds">IBrahim Moamen</NavLink>
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
          <span>وشكرا للبشمهندس حمزه نبيل ❤ </span>
        </div>
        <div className="like-comment">
          <div className="likes" data-tip data-for="like">
            <img src={love} />
            <img src={like} />

            <ReactTooltip id="like" place="bottom" effect="solid">
              Ahmed Hamdy <br></br> IBrahim Moamen<br></br> Mohamed Hassan{" "}
              <br></br>
              Ahmed Hamdy <br></br> IBrahim Moamen<br></br> Mohamed Hassan{" "}
              <br></br>
              Ahmed Hamdy <br></br> IBrahim Moamen<br></br> Mohamed Hassan{" "}
              <br></br>
              Zeiad Bakr <br></br> Ahmed Nasser<br></br> ...and 985k more
            </ReactTooltip>
            <span style={({ color: "gray" }, { marginLeft: "3px" })}>
              {" "}
              985k{" "}
            </span>
          </div>
          <span> 1k Comments </span>
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
    </Fragment>
  );
}
