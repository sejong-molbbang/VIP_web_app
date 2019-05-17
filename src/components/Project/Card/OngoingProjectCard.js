import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class OngoingProjectCard extends Component {

    render() {
        const { projectname, simpleDescript, description, people, type, likes } = this.props;
        return (
            <div>
                <Card>
                    <Card.Content>
                        <Card.Header> { projectname } </Card.Header>
                        <Card.Meta> joined { people.length } people </Card.Meta>
                        <Card.Description> { simple_descript }</Card.Description>
                        <Card.Content as='a'> #Tensorflow #Pytorch </Card.Content>
                        
                        <Card.Content extra>
                            <Button basic color='green'>Show details</Button>
                        </Card.Content>
                    </Card.Content> 
                </Card>
            </div>
        )
    }
}

export default OngoingProjectCard;