import React from 'react';
import { Input, Menu, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Menu fixed="top" size="large" inverted>
        <Container>
          <Menu.Item header>
            <Link to="/">
              <Icon name="cloud" size="big" /> Weather App
            </Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
