import React from "react";

const CompMhs = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/arch" alt="Image" />
      </div>
      <div className="content">
        <p className="desc">{props.nim}</p>
        <p className="title">{props.name}</p>
        <p className="desc">{props.kelas}</p>
      </div>
    </div>
  );
};

export default CompMhs;
