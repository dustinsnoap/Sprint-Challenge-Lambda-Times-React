import React, { Component } from 'react';
import styled from 'styled-components'

import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel'

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: tabData,
      cards: cardData,
    })
  }

  changeSelected = tab => {
    // takes in tab and updates the state with new tab
    this.setState({selected: tab})
  };

  filterCards = () => {
    // filters out cards not related to the selected tab
    return this.state.selected === 'all'
      ? this.state.cards
      : this.state.cards.filter(card => card.tab.includes(this.state.selected))
  };

  render() {
    return (
      <CONTENT>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </CONTENT>
    );
  }
}

const CONTENT = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`
