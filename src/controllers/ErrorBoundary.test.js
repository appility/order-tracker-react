import React from 'react'
import ReactDOM from 'react-dom'
/* Application files */
import ErrorBoundary from './ErrorBoundary.js'

// renders children
// renders error

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ErrorBoundary><p>My child</p></ErrorBoundary>, div)
  ReactDOM.unmountComponentAtNode(div)
});

// describe('MyThing', function() {
//   var html;

//   describe('#render', function() {
//     beforeEach(function(){
//       var component = MyThing();
//       var componentInstance = TestUtils.renderIntoDocument(component);
//       componentInstance.setState({isCool: true});

//       html = componentInstance.getDOMNode().textContent;
//     });

//     it('includes something cool', function(){
//       expect(html).toContain('something cool');
//     });
//   });
// });