import React, { Component } from 'react'
import axios, { post } from 'axios'

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //email: '123@naver.com',
      video: ''
    }
  }

  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload=(e) => {
      console.log("img data", e.target.result)

      const url="http://127.0.0.1:8000/api/video_upload";
      const formData={
        //email="123@naver.com",
        video:e.target.result
      }

      return post(url, formData)
        .then(res => console.log("success"))
        .catch(err => console.log("failed"))
    }

  }

  render() {
    return (
      <div onSubmit = {this.onFromSubmit}>
        <input type="file" onChange={(e)=>this.onChange(e)} />
      </div>
    )
  }
}

export default FileUpload;
