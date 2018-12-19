import React from 'react'
import styled from 'styled-components'

const Centre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

class Centered extends React.Component {
  render() {
    return (
      <Centre>{this.props.children}</Centre>
    )
  }
}

export default Centered