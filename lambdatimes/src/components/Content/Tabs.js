import React from 'react';
import PropTypes from 'prop-types'

import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(t =>
          <Tab 
            tab={t}
            key={t}
            selected={props.selectedTab === t}
            selectTabHandler={props.selectTabHandler}  
          />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.string),
}

export default Tabs;
