import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = props => {
  return (
    <CARD>
      <HEADLINE>{props.card.headline}</HEADLINE>
      <AUTHOR>
        <IMGCONTAINER>
          <img src={props.card.img} alt={props.card.headline}/>
        </IMGCONTAINER>
        <span>By {props.card.author}</span>
      </AUTHOR>
    </CARD>
  );
};

Card.propTypes = {
  card: PropTypes.objectOf(PropTypes.string),
}

export default Card;

const HEADLINE = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`
const AUTHOR = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;

  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`
const IMGCONTAINER = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  img {
    width: 40px;
  }
`
const CARD = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
