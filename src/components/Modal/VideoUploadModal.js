import React, { Component } from 'react'
import { Container, Button, Modal, Dimmer,Segment, Loader } from 'semantic-ui-react'


const style = {
    marginTop: '0px',
    marginBottom: '0px',
    padding: '3em',

}

class VideoUploadModal extends Component {
    constructor(props){
        super(props);
        this.state = {
          video: null,
          uploading: false,
        };
        this.inpuElement = null;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({video: e.target.files[0]});
    }

    handleSubmit(e){
        const { handler, uploadStart } = this.props;
        this.setState({
            ...this.state,
            uploading: true,
        });
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
            this.setState({
                ...this.state,
                uploading: false,
            });
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
        const { open, closeOnEscape, closeOnDimmerClick, dimmer, uploading } = this.state
        const { email } = this.props

        return (
            <div>
            
            <button class="ui inverted primary button" onClick={this.closeConfigShow(true,false,'blurring')} style={{ marginLeft: '-1.5em' }}> 영상 업로드 </button>
            
                <Modal
                    closeOnEscape={closeOnEscape}
                    closeOnDimmerClick={closeOnDimmerClick}
                    dimmer={dimmer}
                    open={open}
                    onClose={this.close}>
                    <Modal.Header> 영상을 업로드하세요. </Modal.Header>
                    <Segment style={style}>
                        <Dimmer active={uploading}>
                        <Loader indeterminate>잠시만 기다려주세요</Loader>
                        </Dimmer>
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
                    </Segment>
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
