import React, { Component } from 'react'
import styled from 'styled-components'

import { carouselData } from '../../data'

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      index: 0,
    }
  }
  componentDidMount(){
    this.setState({data: carouselData}) //store date once component is mounted
    setInterval(this.rightClick, 4200) //auto-scroll every 4.2 seconds
  }

  leftClick = () => {
    //decrement the index
    this.setState(prevState => {
      let index = prevState.index
      if(index <= 0) index = prevState.data.length - 1
      else index--
      return {
        index: index,
      }
    })
  }
  rightClick = () => {
    //increment the index
    this.setState(prevState => {
      let index = prevState.index
      if(index >= prevState.data.length - 1) index = 0
      else index++
      return {
        index: index,
      }
    })
  }
  selectedImage = () => {
    return <img src={this.state.data[this.state.index]} style={{display: 'block'}} alt='nope' />
  }
  
  render(){
    return (
      <CAROUSEL>
        <LEFTBUTTON onClick={this.leftClick}>{"<"}</LEFTBUTTON>
        <this.selectedImage />
        <RIGHTBUTTON onClick={this.rightClick}>{">"}</RIGHTBUTTON>
      </CAROUSEL>
    )
  }
}

const LEFTBUTTON = styled.div`
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`
const RIGHTBUTTON = styled.div`
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
`
const CAROUSEL = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;
  }

  img {
    width: calc(100% - 200px);
    display: none;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 500px;
    position: relative;
    overflow: hidden;
    margin-top: 16px;
    font-size: 50px;
    cursor: pointer;
    color: #888;

    &:hover {
      color: #333;
    }
  }
`