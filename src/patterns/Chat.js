import React, {Component} from 'react'

const returnChatUrl = (reference) => {
  return process.env.REACT_APP_CHAT_BASE_URL + reference
}

const openWindow = (url) => {
  let win = window.open(url, '_blank', 'width=500,height=545,scrollbars=yes')
  return (!win)
}

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    let url = returnChatUrl(this.props.OrderRef)
    openWindow(url)
  }

  render() {
    let {className} = this.props
    return (
      <section className={ `off-black ${className}` } style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '30px 0'}}>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-4 xlarge-6">
              <h3>Problem with your order?</h3>
              <p>Get in touch with our team if you have any questions about your order or would like to make a change</p>
            </div>
            <div className="cell large-4 xlarge-4">
              <p>Open 08.00 - 18.00 Monday-Friday</p>
              <h3>Call <a className="white" href="tel:08000113237">0800 011 3237</a></h3>
            </div>
            <div className="cell large-4 xlarge-2 align-right-medium">&nbsp;</div>
          </div>
        </div>
      </section>
    )
  }
}

// Or request a callback
// <span className="label white outline">Currently open</span>
//<button className="button" onClick={this.handleClick} >Live chat</button><br />



