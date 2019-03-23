import React from 'react'
import PropTypes from 'prop-types'

const Tab = props => {
  return (
    <div
      className={props.selected ? 'tab active-tab' : 'tab'}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selected: PropTypes.bool,
  selectTabHandler: PropTypes.func,
}


export default Tab;
