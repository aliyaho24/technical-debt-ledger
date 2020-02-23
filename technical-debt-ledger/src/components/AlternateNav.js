import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SummaryPage from './../views/SummaryPage';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'


const VerticalSidebar = ({animation, visible}) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction='left'
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      Technical Debt Summary
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='folder' />
      Repository
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='settings' />
      Settings
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

class SideMenu extends Component {
  state = {
    direction: 'left',
    dimmed: false,
    visible: true,
  }

  handleAnimationChange = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }))

  handleDirectionChange = (direction) => () =>
    this.setState({ direction, visible: false })

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
      <div>
        <Sidebar.Pushable style={{height: '100vh'}} as={Segment}>
            <VerticalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
              style={{position: 'absolute'}}
            />

          <Sidebar.Pusher style={{width: '100%'}} dimmed={dimmed && visible}>
              <Button
                disabled={vertical}
                onClick={this.handleAnimationChange('slide along')}
              >
              </Button>
              <Segment basic>
                <SummaryPage />
              </Segment>
          
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


export default SideMenu;