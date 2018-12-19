/* global: window */

import React from 'react'
import styled from 'styled-components'

const centreY = 75
const amplitude = 20

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 12em;
`

export default class Caterpillar extends React.Component {
  constructor(props) {
    super(props);
    this.cLeft = React.createRef();
    this.cCentre = React.createRef();
    this.cRight = React.createRef();
    this.currentAnimationTime = 0;
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    if (this.animationId) {
      window.cancelAnimationFrame(this.animationId);
      this.animationId = undefined;
    }
  }

  animate() {
    this.cLeft.current.setAttribute('cy', 
    centreY + (amplitude *(Math.sin(this.currentAnimationTime))));
    this.cCentre.current.setAttribute('cy', 
    centreY + (amplitude * (Math.sin(this.currentAnimationTime - 1))));
    this.cRight.current.setAttribute('cy', 
    centreY + (amplitude * (Math.sin(this.currentAnimationTime - 2))));
    this.currentAnimationTime += 0.15;
    this.animationId = window.requestAnimationFrame(this.animate);
  }

  render() {
    return (
      <Wrapper>
        <svg
          width="150"
          height="75"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 300 150"
        >
          <style>
            { `.cLeft { fill:#6400AD }` }
            { `.cCentre { fill:#E60050 }` }
            { `.cRight { fill:#00A0D6 }` }
          </style>
          <circle cx="120" cy="75" r="10" className="cLeft" ref={this.cLeft} />
          <circle cx="150" cy="75" r="10" className="cCentre" ref={this.cCentre} />
          <circle cx="180" cy="75" r="10" className="cRight" ref={this.cRight} />
        </svg>
      </Wrapper>
    );
  }
}

/*
set props to color and scale
*/
