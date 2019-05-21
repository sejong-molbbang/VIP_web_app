import React, {Component} from 'react'
import LoginContainer from 'containers/LoginContainer';
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
import logo from 'image/logo.png';


class Home extends Component {

    render() {
        const { match } = this.props;
        
        return (
            <div>
                <Menu fixed='top' inverted >
                <Container >
                    <Menu.Item as='a' header  >
                    <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                    VIP WEB
                    </Menu.Item>
                    <Menu.Item as='a'>Personal Infomation Protect</Menu.Item>
                </Container>
                </Menu>

                <Container text style={{ marginTop: '7em' }}>
                    <LoginContainer/>
                </Container>
            </div>
        );
    };
}

export default Home;