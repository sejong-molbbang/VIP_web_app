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
import axios from 'axios';
import { setInterval } from 'core-js';


class ImageUploadModal extends Component {
    constructor(props){
        super(props);
        this.state = {
        images: null,
        };
        this.inpuElement = null;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        const { handler } = this.props;
        let formData = new FormData();
        for (const image of this.state.images) {
            formData.append('images', image);
        }
        fetch('http://localhost:8000/api/imageupload', {
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


    handleChange(e){
        this.setState({images: e.target.files});
    }

    state = { open : false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick, dimmer) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, dimmer, open: true })
    }

    close = () => this.setState({ open: false })

    render() {
        const { open, closeOnEscape, closeOnDimmerClick, dimmer } = this.state;
        
        return (
            <div>
            
            <button class="ui inverted primary button" onClick={this.closeConfigShow(true,false,'blurring')} style={{ marginLeft: '-1.5em' }}> 이미지 업로드 </button>
            
            <Modal
                closeOnEscape={closeOnEscape}
                closeOnDimmerClick={closeOnDimmerClick}
                dimmer={dimmer}
                open={open}
                onClose={this.close}
            >
                <Modal.Header> 이미지를 업로드하세요. </Modal.Header>
                <Modal.Description>
                    <input
                        name='images'
                        type="file"
                        multiple
                        ref={(input) => { this.inpuElement = input; }}
                        accept=".jpg,.jpeg,.png"
                        onChange={this.handleChange}/>
                </Modal.Description>
                <Modal.Actions>
                <Button color='red' onClick={this.close} negative>
                    취소
                </Button>
                <Button
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

export default ImageUploadModal;
