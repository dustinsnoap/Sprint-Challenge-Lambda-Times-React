import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tab from './Tab';

const Tabs = props => {
  return (
    <TABS>
      <TOPICS>
        <TITLE>TRENDING TOPICS:</TITLE>
        {/* Map through tabs */}
        {props.tabs.map(t =>
          <Tab 
            tab={t}
            key={t}
            selected={props.selectedTab === t}
            selectTabHandler={props.selectTabHandler}  
          />)}
      </TOPICS>
    </TABS>
  );
};

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.string),
}

export default Tabs;

const TITLE = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`
const TABS = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const TOPICS = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`
