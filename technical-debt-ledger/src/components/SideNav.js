import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './../styles/style.css';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Navigation = () => {
  return (
    <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                R2S2
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    app
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    src
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
  );
}

export default Navigation;