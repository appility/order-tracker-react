import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount, render, unmount } from 'enzyme'
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import ProgressStep from './ProgressStep.js';

const props =  {
  item: {
    DisplayName: null,
    Date: null,
    Description: null,
    IsActiveNode: null,
    IsFirstActiveNode: null,
    NodeType: null
  }
}

describe('rendering', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProgressStep />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a list item', () => {
    let item = {
      AuthLevel: 1,
      Date:"2018-08-17T00:00:00Z",
      Description: "",
      DisplayName: "Order received",
      IsActiveNode: false,
      IsFirstActiveNode: false,
      NodeType: 0
    }
    const wrapper = mount(<ProgressStep {...item} />);
    expect(wrapper.find('li').length).toEqual(1)
  });

  it('renders a list item with class "progress-step"', () => {
    let item = {
      AuthLevel: 1,
      Date:"2018-08-17T00:00:00Z",
      Description: "",
      DisplayName: "Order received",
      IsActiveNode: false,
      IsFirstActiveNode: false,
      NodeType: 0
    }
    const wrapper = mount(<ProgressStep {...item} />);
    expect(wrapper.find('li.progress-step').length).toEqual(1)
  });

  it('renders correct title in list item', () => {
    let item = {
      AuthLevel: 1,
      Date:"2018-08-17T00:00:00Z",
      Description: "Your order is OK and is already checked by us.",
      DisplayName: "Order received",
      IsActiveNode: false,
      IsFirstActiveNode: false,
      NodeType: 0
    }
    const wrapper = mount(<ProgressStep {...item} />)
    expect(wrapper.find('p.progress-title').text()).toEqual('Order received 17 August 2018')
  });

  it('renders correct note in list item', () => {
    let item = {
      AuthLevel: 1,
      Date:"2018-08-17T00:00:00Z",
      Description: "Your order is OK and is already checked by us.",
      DisplayName: "Order received",
      IsActiveNode: false,
      IsFirstActiveNode: false,
      NodeType: 0
    }
    const wrapper = mount(<ProgressStep {...item} />)
    expect(wrapper.find('p.note').text()).toEqual('Your order is OK and is already checked by us.')
  });

  it('renders nothing if NodeType = 4 and Date = null (i.e. a non-existant Engineer Appointment)', () => {
    let item = {
      Date: null,
      NodeType: 4,
      DisplayName: 'Engineer Appointment'
    }
    const wrapper = mount(<ProgressStep {...item} />);
    expect(wrapper.isEmptyRender()).toBe(true);
    expect(wrapper.find('li').length).toEqual(0);
    wrapper.unmount()
  });

  it('Carrier Tracking link should be present if DispatchDetails object passed in props', () => {
    let item = {
      Date:"2018-08-17T00:00:00Z",
      NodeType: 3,
      DisplayName: 'Engineer Appointment',
      DispatchDetails: [{
        DispatchDate: "20 August 2018",
        EquipmentNames: "BTCV W52P DECT base unit handset",
        TrackingReferenceNumber: "PBMB2018477001",
        TrackingReferenceUrl: 'https://tracker'
      }]
    }
    const wrapper = render(<ProgressStep {...item} />)
    console.log(wrapper.html())
    expect(wrapper.find('a.link').text()).toEqual('Track your package')
  });

  it('Completed icon should be present if Date property is in past', () => {
    let item = {
      Date:"2012-08-17T00:00:00Z",
      NodeType: 2,
      DisplayName: 'Equipment dispatched',
    }
    const wrapper = mount(<ProgressStep {...item} />)
    expect(wrapper.find('svg desc').text()).toEqual('Checkmark')
    wrapper.unmount()
  });

  it('Pending icon should be present if Date property is in future', () => {
    let item = {
      Date:"2080-08-17T00:00:00Z",
      NodeType: 2,
      DisplayName: 'Completion',
    }
    const wrapper = mount(<ProgressStep {...item} />)
    expect(wrapper.find('svg desc').text()).toEqual('Circle')
    wrapper.unmount()
  });
})
