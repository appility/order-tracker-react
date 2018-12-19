/**
* These tests are designed to run against an instance of the app 
* which is calling the Mock API
* npm run start-test
* NODE_ENV=test npm-run-all -p watch-css start-js-test",
*
*/
const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect
require('dotenv').config()

const baseURL = process.env.WEBSITE_URL;

describe('Order Status page', () => {
  xit('User can view order status page', function(done) {
    this.timeout('10s')
    let URL = baseURL + '/#/order/BT2462N4'
    const nightmare = Nightmare()
    nightmare
      .goto(URL)
      .wait('#main')
      .evaluate(() => document.querySelector('h1').innerHTML)
      .end()
      .then(text => {
        expect(text).to.equal('Order Status')
        done()
      })
  })
  xit('User can view a order that is pending', function(done) {
    this.timeout('10s')
    let URL = baseURL + '/#/order/BT0000001'
    const nightmare = Nightmare()
    nightmare
      .goto(URL)
      .wait('#main')
      .evaluate(() => document.querySelector('h2').innerHTML)
      .end()
      .then(text => {
        expect(text).to.equal('An order that is pending!')
        done()
      })
  })
  xit('User can deeplink to order status page', function(done) {
    this.timeout('10s')
    let URL = baseURL + '/#/order/BT2462N4'
    const nightmare = Nightmare()
    nightmare
      .goto(URL)
      .wait('#main')
      .evaluate(() => document.querySelector('h1').innerHTML)
      .end()
      .then(text => {
        expect(text).to.equal('Order Status')
        done()
      })
  })
})
