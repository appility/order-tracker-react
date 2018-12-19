import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import StatusCallout from './StatusCallout.js'

xdescribe('StatusCallout', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<StatusCallout/>, div)
    });

    xdescribe('render', () => {
        it('should render the Status Callout', () => {
            const StatusCallout = mount(<StatusCallout status={'In Progress'} date={63}/>)
            const time = <span className="clock-text">01:03</span>
            expect(StatusCallout.contains(time)).toEqual(true)
        });
    });

    xdescribe('message', () => {
        it('should format date', () => {
            const clock = shallow(<StatusCallout/>)
            const seconds = 635
            const expected = '10:35'
            const actual = clock.instance().formatTime(seconds)
            expect(actual).toBe(expected)
        });

        it('should display friendly date if today', () => {
            const clock = shallow(<StatusCallout/>)
            const seconds = 65
            const expected = '01:05'
            const actual = clock.instance().formatTime(seconds)

            expect(actual).toBe(expected)
        })
    })
})
