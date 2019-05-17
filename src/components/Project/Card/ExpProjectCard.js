import React, { Component } from 'react';
import { Card, Modal, Button, Header, Divider, Label, LabelGroup } from 'semantic-ui-react';


class ExpProjectCard extends Component {
    style = {
        margin: '0.3rem'
    }

    render() {
        const { projectname, nickname, simple_descript, description } = this.props;

        return (
            <Card>
                <Card.Content>
                    <Card.Header style = {this.style}>
                        { projectname }
                        <Label style={{marginLeft:'1rem'}} content= 'Experience'/>
                        <Label corner='right'/>
                    </Card.Header>
                    <Card.Meta style = {this.style}> { nickname } </Card.Meta>
                    <Card.Description style = {this.style}> { simple_descript }</Card.Description>
                    <Card.Content style = {this.style} as='a'> #Tensorflow #Pytorch </Card.Content>
                    <Divider/>
                    <Card.Content style={{display:'flex', justifyContent:'center'}}  extra>
                        <Modal trigger={<Button basic color='green'>Show details</Button>}>
                            <Modal.Header> Detailed Experience Project </Modal.Header>
                            <Modal.Content>
                            <Modal.Description>
                                <Header> {projectname} </Header>
                                <p> { description } </p>
                                <h3>Tag</h3>
                                <a>#Tensorflow #Pytorch #Deeplearning4j</a>
                            </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Card.Content>
                </Card.Content>
            </Card>
        )
    }
}

export default ExpProjectCard;