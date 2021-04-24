import React from "react";
import "./CreateComment.css";
import user from "../../image/cc.jpg";
import "../../App.css";
import { render } from "@testing-library/react";

export default class CreateComment extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-comment">
        <div className="img-inpt">
          <div className="user-img">
            <img src={user} />
          </div>
          <textarea
            type="text"
            placeHolder="What is on your mind , Ahmed?"
          ></textarea>
        </div>
        <div className="image-post">
          <div className="img-btn">
            <input name="img-vid" id="img-vid" type="file" />
            <label className="btn " name="img-vid" for="img-vid">
              <i class="far fa-images"></i>
              <span> Photo/Video </span>
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Post
          </button>
        </div>
      </form>
    );
  }
}
