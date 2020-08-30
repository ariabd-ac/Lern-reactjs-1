import React, { Component } from "react";

import BlogPost from "./BlogPost/BlogPost";
import Mahasiswa from "./Mahasiswa/Mahasiswa";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <p>Yt Component</p>
        <hr />
        <YouTubeComp time="7.39" title="Bagian 1" desc="Watch 20x" />
        <YouTubeComp time="8.39" title="Bagian 2" desc="Watch 10x" />
        <YouTubeComp time="9.39" title="Bagian 3" desc="Watch 90x" />
        <YouTubeComp time="10.39" title="Bagian 4" desc="Watch 30x" />
        <YouTubeComp /> */}
        {/* <p>Counter</p>
        <hr />
        <Product /> */}

        <p>Blog Post API</p>
        <hr />
        <BlogPost />
        {/* <Mahasiswa /> */}
      </div>
    );
  }
}

export default Home;
