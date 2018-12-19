/* Libraries */
import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import assert from 'assert'
import { Route } from 'react-router'
/* Application files */
import AppWithAnalytics, {App} from './App'
import GenericNotFound from './layouts/404.js'
import Home from './controllers/Home'
import OrderStatus from './controllers/OrderStatus'
import OrderItem from './controllers/OrderItem'

it('renders correct routes', () => {
  const wrapper = shallow(<App />)
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props()
    pathMap[routeProps.path] = routeProps.component
    return pathMap
  }, {});
  expect(pathMap['/']).toBe(Home)
  expect(pathMap['/order/:id']).toBe(OrderStatus)
  expect(pathMap['/order-item/:id/:itemId']).toBe(OrderItem)
});
