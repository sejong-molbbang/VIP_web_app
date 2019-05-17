import React from 'react'
import Login from 'components/Login';
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

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header >
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          VIP WEB
        </Menu.Item>
        <Menu.Item as='a'>Personal Infomation Protect</Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Login/>
    </Container>

    
  </div>
)

export default FixedMenuLayout