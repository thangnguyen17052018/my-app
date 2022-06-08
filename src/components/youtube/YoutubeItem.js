import React from "react";

export const YoutubeItem = (props) => {
    return (
      <div className={`youtube-item ${props.className}`}>
        <div className="youtube-img">
          <img src={props.image} alt="" />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="" className="youtube-avatar" />
          <div className="youtube-info">
            <div className="youtube-title">
              {props.title || "This is example of title"}
            </div>
            <div className="youtube-author">{props.author}</div>
          </div>
        </div>
      </div>
    );
  }