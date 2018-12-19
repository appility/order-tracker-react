import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTopWithRouter from './ScrollToTopRoute'
import './App.css'
import GenericNotFound from './layouts/404.js'
import ErrorBoundary from './controllers/ErrorBoundary'
import Home from './controllers/Home'
import GroupOrder from './controllers/GroupOrder'
import OrderStatus from './controllers/OrderStatus'
import OrderItem from './controllers/OrderItem'
import DummyHeader from './components/DummyHeader'
import WithResize from './withResize'

/*
* NOTE: exporting both App and the wrapped App, for testing
*/

export class App extends Component {
  render() {
    const Header = process.env.NODE_ENV === 'development' ? <DummyHeader /> : '';
    return (
      <Router>
        <WithResize>
          <ScrollToTopWithRouter>
            <div className="App">
              {Header}
              <ErrorBoundary>
                <Switch>
                  <Route 
                    exact path="/" 
                    component={Home}
                    documentTitle={'BT Order Tracker'} />
                  <Route
                    path="/order/:id/:postcode"
                    component={OrderStatus}
                    documentTitle={'BT Order Tracker | My Order'}
                  />
                  <Route
                    path="/order/:id"
                    component={OrderStatus}
                    documentTitle={'BT Order Tracker | My Order'}
                  />
                  <Route
                    path="/order/:id"
                    component={OrderStatus}
                    documentTitle={'BT Order Tracker | My Order'}
                  />
                  <Route
                    path="/order-item/:id/:itemId/:postcode"
                    component={OrderItem}
                    documentTitle={'BT Order Tracker | My Order Item'}
                  />
                  <Route
                    path="/order-item/:id/:itemId"
                    component={OrderItem}
                    documentTitle={'BT Order Tracker | My Order Item'}
                  />
                  <Route component={GenericNotFound} />
                </Switch>
              </ErrorBoundary>
            </div>
          </ScrollToTopWithRouter>
          </WithResize>
      </Router>
    )
  }
}

export default App
