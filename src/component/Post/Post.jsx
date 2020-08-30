import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/arch" alt="Image" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <div className="col-md-12">
          <button
            className="btn btn-danger mt"
            onClick={() => props.remove(props.data.id)}
          >
            Remove
          </button>

          <button
            className="btn btn-primary mt ml"
            onClick={() => props.update(props.data)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
