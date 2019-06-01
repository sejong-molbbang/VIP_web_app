import React, { Component } from 'react';
import ImageUploader from 'react-images-upload'


class ImgUploader extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
    });
  }

  render() {
    console.log(this.state)
    return (
      <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={this.onDrop}
        imgExtension={['.jpg', '.png']}
        maxFileSize={5242880}
        withPreview={true}
        label = '.jpg 또는 .png 파일 허용'
      />
    );
  }
}


export default ImgUploader;
