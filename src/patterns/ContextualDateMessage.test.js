import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure } from 'enzyme';
import { ReturnFormattedDate } from './../utils/Date'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ContextualDateMessage from './ContextualDateMessage';

describe('ContextualDateMessage', () => {
    it('renders without crashing', () => {
      let div = document.createElement('div');
      ReactDOM.render(<ContextualDateMessage />, div);
    });

    describe('Missing props', () => {
      it('should render empty message if ProductDuedate and ExpectedDispatchDate are null', () => {
        let result = mount(<ContextualDateMessage 
          Status="Completed"
          ProductDuedate={null}
          ExpectedDispatchDate={null} />);
        expect(result.find('span').text()).toEqual('');
      });

      it('should render empty message if ProductDuedate and ExpectedDispatchDate are undefined', () => {
        let result = mount(<ContextualDateMessage />);
        expect(result.find('span').text()).toEqual('');
      });
    });

    describe('Status is "Completed", should render correct message', () => {
      it('if Status is "Completed" and ExpectedDispatchDate is in past', () => {
        let result = mount(<ContextualDateMessage 
          Status="Completed"
          ProductDuedate={null}
          ExpectedDispatchDate="2018-02-19T15:10:25Z" />);
        expect(result.find('span').text()).toEqual('Your equipment was dispatched on 19 February 2018.');
      });

      it('if Status is "Completed" and ExpectedDispatchDate is in future', () => {
        let result = mount(<ContextualDateMessage 
          Status="Completed"
          ProductDuedate={null}
          ExpectedDispatchDate="2050-03-19T15:10:25Z" />);
        expect(result.find('span').text()).toEqual('Your equipment is expected to be dispatched on 19 March 2050.');
      });

      it('if Status is "Completed" and ProductDuedate is in past', () => {
        let result = mount(<ContextualDateMessage 
          Status="Completed"
          ProductDuedate="2018-03-01T15:10:25Z" 
          ExpectedDispatchDate={null} />);
        expect(result.find('span').text()).toEqual('Your service was activated on 01 March 2018.');
      });

      it('if Status is "Completed" and ProductDuedate is in future', () => {
        let result = mount(<ContextualDateMessage 
          Status="Completed"
          ProductDuedate="2050-03-19T15:10:25Z" 
          ExpectedDispatchDate={null} />);
        expect(result.find('span').text()).toEqual('Your service will be ready on 19 March 2050.');
      });
    });

    describe('Status is NOT "Completed", should render correct message', () => {
      it('if Status is NOT "Completed" and ExpectedDispatchDate is todays date', () => {
        let today = new Date().toISOString()
        let result = mount(<ContextualDateMessage 
          Status="Pending"
          ProductDuedate={null}
          ExpectedDispatchDate={today} />);
        expect(result.find('span').text()).toEqual('Your equipment is expected to be dispatched on ' + ReturnFormattedDate(today) + '.');
      });

      it('if Status is NOT "Completed" and ProductDuedate is todays date', () => {
        let today = new Date().toISOString()
        let result = mount(<ContextualDateMessage 
          Status="Pending"
          ProductDuedate={today}
          ExpectedDispatchDate={null} />);
        expect(result.find('span').text()).toEqual('Your service will be ready on ' + ReturnFormattedDate(today) + '.');
      });

      it('if Status is NOT "Completed" and ExpectedDispatchDate is in past', () => {
        let result = mount(<ContextualDateMessage 
          Status="Pending"
          ProductDuedate={null}
          ExpectedDispatchDate="2008-03-19T15:10:25Z"  />);
        expect(result.find('span').text()).toEqual('Your equipment was due to be dispatched on 19 March 2008.');
      });

      it('if Status is NOT "Completed" and ExpectedDispatchDate is in future', () => {
        let result = mount(<ContextualDateMessage 
          Status="Pending"
          ProductDuedate={null}
          ExpectedDispatchDate="2050-03-19T15:10:25Z"  />);
        expect(result.find('span').text()).toEqual('Your equipment is expected to be dispatched on 19 March 2050.');
      });

      it('if Status is NOT "Completed" and ProductDuedate is in past', () => {
        let result = mount(<ContextualDateMessage 
          Status="In Progress"
          ProductDuedate="2008-01-19T15:10:25Z"
          ExpectedDispatchDate={null} />);
        expect(result.find('span').text()).toEqual('Your service was due to be activated on 19 January 2008.');
      });

      it('if Status is NOT "Completed" and ProductDuedate is in future', () => {
        let result = mount(<ContextualDateMessage 
          Status="In Progress"
          ProductDuedate="2060-01-19T15:10:25Z"
          ExpectedDispatchDate={null} />);
        expect(result.find('span').text()).toEqual('Your service will be ready on 19 January 2060.');
      });
    });
});
