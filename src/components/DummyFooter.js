
import React from 'react'
import styled from 'styled-components'

const FooterEl = styled.div`
	height: 60px;
	background-color: #6400AA;
	background-image: url(%PUBLIC_URL%/assets/img/header_small.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
  @media (min-width: 600px) {
    height: 120px;
    background-image: url(/assets/img/header_large-bg.png);
    background-repeat: repeat-x;
  }
`;

const FooterInnerEl = styled.div`
	@media (min-width: 600px) {
		height: 120px;
		background-image: url(/assets/img/header_large.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	}
`;

class DummyFooter extends React.Component {
  render() {
    return (
      <FooterEl>
    		<FooterInnerEl>&nbsp;</FooterInnerEl>
  		</FooterEl>
    )
  }
}

export default DummyFooter
