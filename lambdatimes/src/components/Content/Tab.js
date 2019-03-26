import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Tab = props => {
  return (
    <TAB
      className={props.selected ? 'active' : ''}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </TAB>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selected: PropTypes.bool,
  selectTabHandler: PropTypes.func,
}


export default Tab;

const TAB = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &.active {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }
  &:hover {
    text-decoration: underline;
  }

`