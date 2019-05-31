import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import VideoUpload from '../modal/videoUpload.js'

class ModalTest extends Component {

  state = { open : false }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick, dimmer) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, dimmer, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDimmerClick, dimmer } = this.state

    return (
      <div>
        <button class="ui inverted primary button" onClick={this.closeConfigShow(true,false,'blurring')} style={{ marginLeft: '-1.5em' }}> 동영상 업로드 </button>
      
        <Modal
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          dimmer={dimmer}
          open={open}
          onClose={this.close}
        >
          <Modal.Header> 동영상을 업로드하세요. </Modal.Header>
          <Modal.Description>
           <VideoUpload/>
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
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalTest;
