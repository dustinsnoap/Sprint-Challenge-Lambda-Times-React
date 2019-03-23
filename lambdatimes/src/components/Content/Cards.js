import React from 'react';
import PropTypes from 'prop-types'

import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(c => <Card card={c} key={c.headline}/>)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
}

export default Cards;