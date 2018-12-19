
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure } from 'enzyme';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
var fetchMock = require('fetch-mock');

import { FetchJSON } from './FetchJSON';

describe('Fetch', () => {

  // FetchJSON calls fetch with headers

  it('returns the response from a successful fetch', async () => {
    fetchMock.get('/api/order/BTB0001', function() {
        return {
          body: {
            isSuccess: true,
            code: 600, 
            errorMessage: "", 
            result: {
              OrderNumber: "BTB0001"
            } 
          }
        }
      });
    const response = await FetchJSON('/api/order/BTB0001');
    console.log(response.result)
    expect(response.result).toEqual({OrderNumber: "BTB0001"});
  });

  it('a 500 response from fetch throws with string "Internal Server Error', async () => {
    const delay = () => new Promise((res, rej) => setTimeout(res, 2000))
    fetchMock.get('/api/order/BTB0002', 500)
    try {
      await FetchJSON('/api/order/BTB0002');
      expect(true).to.be.false;
    } catch (error) {
      expect(error.message).toEqual('Internal Server Error');
    }
  });

  it('a 404 response from fetch throws with string "Internal Server Error', async () => {
    const delay = () => new Promise((res, rej) => setTimeout(res, 2000))
    fetchMock.get('/api/order/BTB0002', 500)
    try {
      await FetchJSON('/api/order/BTB0002');
      expect(true).to.be.false;
    } catch (error) {
      expect(error.message).toEqual('Internal Server Error');
    }
  });

    afterEach(() => {
      fetchMock.restore();
    })
  })


  