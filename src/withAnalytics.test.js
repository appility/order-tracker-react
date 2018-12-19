
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'
import sinon from 'sinon'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
/* Application files */
import ScrollToTopWithRouter, { ScrollToTop } from './ScrollToTopRoute'
import WithAnalyticsWithRouter, { WithAnalytics } from './WithAnalytics'

var spy = null

import * as Tracking from './utils/AnalyticsTrack';

describe('AnalyticsWithRouter', () => {
  it('renders without crashing', () => {
    let props = {}
    const div = document.createElement('div')
    ReactDOM.render(<Router><WithAnalyticsWithRouter><p>Child</p></WithAnalyticsWithRouter></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders its children', () => {
    const comp = mount(<Router><WithAnalyticsWithRouter><p>Child</p></WithAnalyticsWithRouter></Router>)
    expect(comp.find('p').text()).toEqual('Child')
  })

  it('clicking a link initiates call to "Track" method', () => {
    let Track = jest.spyOn(Tracking, "Track")//.andReturn("mockData")
    const comp = mount(<WithAnalytics>
                         <p><a href='#' id='linkId'>I am a link</a></p>
                       </WithAnalytics>)
    let link = comp.find('#linkId')
    link.simulate('click')
    // expect(Track).toHaveBeenCalled()
  })

  afterEach(() => {
    if (spy) spy.mockRestore()
  })


    // jest.mock('./utils/AnalyticsTrack', () => ({Track: jest.fn()}))
    //let spy = jest.spyOn(Tracking, 'Track')
    //let spy = jest.spyOn(comp, 'Track')
    //const wrapper = shallow(<ScrollToTop {...props} ><p>Child</p></ScrollToTop>)
        //link.prop('onClick')()
  //let apiRootTab = tabs.find('#api-roots').find('Tab');
        // let embeddedButton = apiRootTab.find('button');
        // console.log(apiRootTab.debug());
        // embeddedButton.prop('onClick')();

        // // in v3, you need to add the following lines.
        // wrapper.update();
        // tabs = wrapper.find('#taxii-tab').find('Tabs');

})
