const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect
require('dotenv').config()

const baseURL = process.env.WEBSITE_URL;

describe('User login', () => {
  xit('User can view login page', function(done) {
    this.timeout('10s')
    const nightmare = Nightmare()
    nightmare
      .goto(baseURL)
      .wait('#main')
      .evaluate(() => document.querySelector('h1').innerHTML)
      .end()
      .then(text => {
        expect(text).to.equal('View Order Status')
        done()
      })
  })

  xit('User is directed to correct URL after login', function(done) {
    this.timeout('10s')
    let OrdersURL = baseURL + '/#/orders'
    const nightmare = Nightmare()
    nightmare
      .viewport(1024, 768)
      .goto(OrdersURL)
      .wait('#main')
      .type('input[name=username]', 'yadda')
      .click('form[name="login-form"] [type=submit]')
      .wait('#main')
      .screenshot('test/screenshots/LoginPageLanding_1.spec.png')
      .url()
      .end()
      .then(url => {
        expect(url).to.equal(OrdersURL)
        done();
      })
  })

  xit('User can login and view orders', function(done) {
    this.timeout('10s')
    const nightmare = Nightmare()
    nightmare
      .viewport(1024, 768)
      .goto(baseURL)
      .wait('#main')
      .type('input[name=username]', 'yadda')
      .click('form[name="login-form"] [type=submit]')
      .wait('[data-test-id="OrdersListView"]')
      .screenshot('test/screenshots/LoginPageLanding_2.spec.png')
      .evaluate(() => document.querySelector('h1').innerHTML)
      .end()
      .then(text => {
        expect(text).to.equal('View Orders')
        done()
      })
  })
})
