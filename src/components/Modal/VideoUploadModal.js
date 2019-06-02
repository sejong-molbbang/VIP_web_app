import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'



class VideoUploadModal extends Component {
    constructor(props){
        super(props);
        this.state = {
          video: null,
        };
        this.inpuElement = null;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({video: e.target.files[0]});
    }

    handleSubmit(e){
        const { handler } = this.props;
        let formData = new FormData();
        formData.append('video',this.state.video);
        fetch('http://localhost:8000/api/videoupload', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
            },
            body: formData
        })
        .then(res => res.json())
        .then((data) => {
            handler(data);
            this.close();
        })
        .catch(err => console.log(err));
    }

    state = { open : false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick, dimmer) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, dimmer, open: true })
    }

    close = () => this.setState({ open: false })

    render() {
        const { open, closeOnEscape, closeOnDimmerClick, dimmer } = this.state
        const { email } = this.props

        return (
            <div>
            
            <button class="ui inverted primary button" onClick={this.closeConfigShow(true,false,'blurring')} style={{ marginLeft: '-1.5em' }}> 영상 업로드 </button>
            
            <Modal
                closeOnEscape={closeOnEscape}
                closeOnDimmerClick={closeOnDimmerClick}
                dimmer={dimmer}
                open={open}
                onClose={this.close}
            >
                <Modal.Header> 영상을 업로드하세요. </Modal.Header>
                <Modal.Description>
                    <input
                        name='video'
                        type="file"
                        multiple={false}
                        ref={(input) => { this.inpuElement = input; }}
                        accept=".mp4,.avi"
                        onChange={this.handleChange}
                    />
                </Modal.Description>
                <Modal.Actions>
                <Button color='red' onClick={this.close} negative>
                    취소
                </Button>
                <Button
                    name = {email}
                    positive
                    icon='checkmark'
                    labelPosition='left'
                    content="업로드"
                    onClick={this.handleSubmit}
                />
                </Modal.Actions>
            </Modal>
            
            
            </div>
        )
    }
}

export default VideoUploadModal;
