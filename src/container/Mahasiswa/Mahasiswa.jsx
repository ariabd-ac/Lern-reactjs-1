import React, { Component, Fragment } from "react";
import "./Mahasiswa.css";
import CompMhs from "../../component/Mahasiswa/CompMhs";

const axios = require("axios");

class Mahasiswa extends Component {
  state = {
    mahasiswa: [],
  };

  componentDidMount() {
    fetch("http://localhost:4500/mahasiswa/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          mahasiswa: json,
        });
      });
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">BlogPost!</p>
        {this.state.mahasiswa.map((mahasiswa) => {
          return (
            <CompMhs
              key={mahasiswa.id}
              nim={mahasiswa.nim}
              name={mahasiswa.name}
              kelas={mahasiswa.kelas}
            />
          );
        })}
        <CompMhs nim="nim" name="name" kelas="kelas" />
      </Fragment>
    );
  }
}

export default Mahasiswa;
