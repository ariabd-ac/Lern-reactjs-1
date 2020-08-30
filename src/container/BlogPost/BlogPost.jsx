import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";

import axios from "axios";

// const axios = require("axios");

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
  };

  handleRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        console.log(res.data);
        this.setState({
          post: res.data,
        });
      });
  };

  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      },
      (err) => {
        // cek eror
        console.log("error", err);
      }
    );
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleFormChange = (event) => {
    // console.log("formChange", event.target);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
    // console.log(this.state.formBlogPost);
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    // //   });
    // axios.get("http://localhost:3000/posts").then((res) => {
    //   console.log(res.data);
    //   this.setState({
    //     post: res.data,
    //   });
    // });
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">BlogPost!</p>
        <div className="col-md-12 mb-3">
          <div className="form-add-post">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={this.state.formBlogPost.title}
              name="title"
              placeholder="add title"
              onChange={this.handleFormChange}
            />
            <label htmlFor="body">Body</label>
            <textarea
              className="body"
              placeholder="add body content"
              value={this.state.formBlogPost.body}
              id="body"
              name="body"
              cols="30"
              rows="10"
              onChange={this.handleFormChange}
            />
            <button className="btn btn-primary" onClick={this.handleSubmit}>
              Simpan
            </button>
          </div>
        </div>
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
