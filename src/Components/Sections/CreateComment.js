import React from "react";
import "./CreateComment.css";
import user from "../../image/cc.jpg";
import "../../App.css";

export default function CreateComment() {
  return (
    <div className="create-comment">
      <div className="img-inpt">
        <div className="user-img">
          <img src={user} />
        </div>
        <textarea
          type="text"
          placeHolder="What is on your mind , Ahmed?"
        ></textarea>
      </div>
    </div>
  );
}
