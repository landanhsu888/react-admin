import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

export default class SidebarExampleSidebar extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
      const { visible } = this.state;

      return (
          <div>
              <Button icon basic onClick={this.handleButtonClick}>
                  <Icon name='bars' />
              </Button>
              <Sidebar.Pushable as={Segment}>
                  <Sidebar
                      as={Menu}
                      animation='overlay'
                      icon='labeled'
                      inverted
                      onHide={this.handleSidebarHide}
                      vertical
                      visible={visible}
                      width='thin'
                  >
                      <Menu.Item as='a'>
                          <Icon name='home' />
                          Home
                      </Menu.Item>
                      <Menu.Item as='a'>
                          <Icon name='gamepad' />
                          Games
                      </Menu.Item>
                      <Menu.Item as='a'>
                          <Icon name='camera' />
                          Channels
                      </Menu.Item>
                  </Sidebar>

                  <Sidebar.Pusher>
                      <Segment basic>
                          <Header as='h3'>Application Content</Header>
                          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                      </Segment>
                  </Sidebar.Pusher>
              </Sidebar.Pushable>
          </div>
      )
  }
}