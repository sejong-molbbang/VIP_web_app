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
        buttonText='Choose videos'
        onChange={this.onDrop}     
        maxFileSize={52428800}
        label= "Max file size: 50mb, accepted: avi| mp4"
        imgExtension={['.avi', '.mp4']}
        withPreview={true}
      />
    );
  }
}


export default ImgUploader;
