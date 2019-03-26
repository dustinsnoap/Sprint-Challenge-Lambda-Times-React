import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from './Card';

const Cards = props => {
  return (
    <CARDS>
      {/* Map through cards */}
      {props.cards.map(c => <Card card={c} key={c.headline}/>)}
    </CARDS>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
}

export default Cards;

const CARDS = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  
  @media (min-width: 1200px) {
      width: 1200px;
  }
`