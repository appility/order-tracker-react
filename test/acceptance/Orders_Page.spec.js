const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect
require('dotenv').config()

const baseURL = process.env.WEBSITE_URL;

xdescribe('Orders page', () => {
  xit('When logged in user can view orders page', function(done) {
    this.timeout('10s')
    let URL = baseURL + '/#/orders'
    const nightmare = Nightmare()
    nightmare
      .goto(URL)
      .wait('#main')
      .evaluate(() => document.querySelector('h1').innerHTML)
      .end()
      .then(text => {
        expect(text).to.equal('View Orders')
        done()
      })
  })
  xit('User can view summary of their orders', function(done) {
    this.timeout('10s')
    let URL = baseURL + '/#/orders'
    const nightmare = Nightmare()
    nightmare
      .goto(URL)
      .wait('#main')
      .evaluate(() => document.querySelector('h1').innerHTML)
      .end()
      .then(text => {
        expect(text).to.equal('View Orders')
        done()
      })
  })
})
