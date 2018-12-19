
import assert from 'assert';
import {
  _omit, 
  LoadScript,
  stringStartsWith,
  FormatPrice, 
  isGroupOrder, 
  isNumeric,
  isArray,
  JsonPathToValue,
  Trim,
  RemoveBrackets,
  RemoveObjectsWithDuplicateProperty,
  RemoveWhitespace,
  ReturnCustomHeaders
} from './Core.js';

describe('_omit', () => {
  it('_omit function returns expected result', () => {
    let obj = {a:'1', b:'2', c:'3'}
    let result = _omit(obj,'b')
    expect(result.b).toEqual(undefined)
    expect(result).toEqual({a:'1', c:'3'})
  });

  it('_omit function returns expected result when no match found', () => {
    let obj = {a:'1', b:'2', c:'3'}
    let result = _omit(obj,'d')
    expect(result.b).toEqual('2')
    expect(result).toEqual({a:'1', b:'2', c:'3'})
  });
})

describe('LoadScript', () => {
  it('LoadScript function loads a js file', () => {
    LoadScript('./test/fixtures/sample.js')
    .then(function() {
      expect(window.LOADED_SCRIPT).toEqual(true)
      done();
    }, function(error) {
      assert.fail(error);
      done();
    })
  });
})

describe('JsonPathToValue', () => {
  it('JsonPathToValue returns a nested object', () => {
    let json = {
      propertyA: 'value',
      objA: {
        propertyB: 'valueB',
        propertyC: 'valueC'
      },
      objC: {
        propertyD: 'valueD',
        propertyE: 'valueE'
      }
    }
    let path = 'objA'
    let result = JsonPathToValue(json, path)
    expect(result.propertyB).toEqual('valueB')
    expect(result.propertyC).toEqual('valueC')
  });

  it('JsonPathToValue returns a nested object property', () => {
    let json = {
      propertyA: 'value',
      objA: {
        propertyB: 'valueB',
        propertyC: 'valueC'
      },
      objC: {
        propertyD: 'valueD',
        propertyE: 'valueE'
      }
    }
    let path = 'objA.propertyC'
    let result = JsonPathToValue(json, path)
    expect(result).toEqual('valueC')
  });

  it('JsonPathToValue returns null if path is not found', () => {
    let json = {
      propertyA: 'value',
      objA: {
        propertyB: 'value'
      }
    }
    let path = 'objB'
    let result = JsonPathToValue(json, path)
    expect(result).toEqual(null)
  });

   it('JsonPathToValue returns null when passed invalid json', () => {
    let json = "{propertyA: 'value',objA: {propertyB: 'value'}}"
    let path = 'objB'
    let result = JsonPathToValue(json, path)
    expect(result).toEqual(null)
  });
})


describe('isNumeric', () => {
  it('isNumeric return true when passed number', () => {
    let result = isNumeric(25.2)
    expect(result).toEqual(true)
  });
  it('isNumeric return true when passed string "25.2"', () => {
    let result = isNumeric('25.3')
    expect(result).toEqual(true)
  });
  it('isNumeric return true when passed string "G34"', () => {
    let result = isNumeric('G34')
    expect(result).toEqual(false)
  });
});

describe('FormatPrice', () => {
  it('FormatPrice returns correct value - 1', () => {
    let result = FormatPrice(25.2)
    expect(result).toEqual('25.20')
  });

  it('FormatPrice returns correct value - 1', () => {
    let result = FormatPrice(119.99)
    expect(result).toEqual('119.99')
  });

  it('FormatPrice returns correct value - 2', () => {
    let result = FormatPrice(0)
    expect(result).toEqual('0.00')
  });

  it('FormatPrice returns correct value - 3', () => {
    let result = FormatPrice(1)
    expect(result).toEqual('1.00')
  });

  it('FormatPrice returns correct value - 3', () => {
    let result = FormatPrice(null)
    expect(result).toEqual(null)
  });

  it('FormatPrice returns correct value - 3', () => {
    let result = FormatPrice('undefined')
    expect(result).toEqual(null)
  });
})

describe('stringStartsWith', () => {
  it('stringStartsWith returns false given an order reference beginning with a "E"', () => {
    let result = stringStartsWith('E00001', 'G')
    expect(result).toEqual(false)
  });

  it('stringStartsWith returns true given an order reference beginning with a "G"', () => {
    let result = stringStartsWith('G00001', 'G')
    expect(result).toEqual(true)
  });
})

describe('isGroupOrder', () => {
  it('isGroupOrder returns false given an order reference beginning with a "E"', () => {
    let result = isGroupOrder('E00001')
    expect(result).toEqual(false)
  });

  it('isGroupOrder returns true given an order reference beginning with a "G"', () => {
    let result = isGroupOrder('G00001')
    expect(result).toEqual(true)
  });
})

describe('isArray', () => {
  it('isArray returns true when passed an array', () => {
    let result = isArray(['ok'])
    expect(result).toEqual(true)
  });

  it('isArray returns false when not passed an array', () => {
    let result = isArray(null)
    expect(result).toEqual(false)
  });
  it('isArray returns false when passed an object', () => {
    let result = isArray({})
    expect(result).toEqual(false)
  });
})

describe('RemoveBrackets', () => {
  it('RemoveBrackets returns new string', () => {
    let result = RemoveBrackets('(E00001)')
    expect(result).toEqual('E00001')
  });

  it('RemoveBrackets returns new string', () => {
    let result = RemoveBrackets('(E00(001)')
    expect(result).toEqual('E00001')
  });

  it('RemoveBrackets returns original string if character not found', () => {
    let result = RemoveBrackets('25/May', '(')
    expect(result).toEqual('25/May')
  });
})

describe('RemoveObjectsWithDuplicateProperty', () => {
  it('RemoveObjectsWithDuplicateProperty returns array length of 2', () => {
    let arr = [{name:'Hades', description:'King of the underworld'}, {name:'Hera', type:'Queen of the gods'}, {name:'Hades', description:'King of the underworld'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'name')
    expect(result.length).toEqual(2)
  });
  it('RemoveObjectsWithDuplicateProperty "description" returns array length of 2', () => {
    let arr = [{name:'Hades', description:'King of the underworld'}, {name:'Hera', type:'Queen of the gods'}, {name:'Hades', description:'King of the underworld'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'description')
    expect(result.length).toEqual(2)
  });
  it('RemoveObjectsWithDuplicateProperty "name" returns array length 1', () => {
    let arr = [{name:'Zeus', type:'King of the gods'}, {name:'Zeus', description:'King of the gods'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'name')
    expect(result.length).toEqual(1)
  });
  it('RemoveObjectsWithDuplicateProperty "description" returns unchanged array length 2', () => {
    let arr = [{name:'Zeus', type:'King of the gods'}, {name:'Zeus', description:'Ruler of Mount Olympus'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'description')
    expect(result.length).toEqual(2)
  });
  it('RemoveObjectsWithDuplicateProperty "description" returns array length 2', () => {
    let arr = [{name:'Zeus', type:'King of the gods'}, {name:'Zeus', description:'King of the gods'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'description')
    expect(result.length).toEqual(2)
  });
  it('RemoveObjectsWithDuplicateProperty "description" returns array length 1', () => {
    let arr = [{name:'Zeus', description:'King of the gods'}, {name:'Zeus', description:'King of the gods'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'description')
    expect(result.length).toEqual(1)
  });
  it('RemoveObjectsWithDuplicateProperty returns first object.name as "Aphrodite"', () => {
    let arr = [{name:'Aphrodite', type:'Goddess of beauty'}, {name:'Aphrodite', type: 'Goddess of love'}, {name:'Apollo', type:'God of arts'}, {name:'Artemis', type:'Virgin goddess of the hunt'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'name')
    expect(result[0].name).toEqual('Aphrodite')
  });
  it('RemoveObjectsWithDuplicateProperty returns second object.name as "Apollo"', () => {
    let arr = [{name:'Aphrodite', type:'Goddess of beauty'}, {name:'Aphrodite', type: 'Goddess of love'}, {name:'Apollo', type:'God of arts'}, {name:'Artemis', type:'Virgin goddess of the hunt'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'name')
    expect(result[1].name).toEqual('Apollo')
  });
  it('RemoveObjectsWithDuplicateProperty returns third object.name as "Artemis"', () => {
    let arr = [{name:'Aphrodite', type:'Goddess of beauty'}, {name:'Aphrodite', type: 'Goddess of love'}, {name:'Apollo', type:'God of arts'}, {name:'Artemis', type:'Virgin goddess of the hunt'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'name')
    expect(result[2].name).toEqual('Artemis')
  });
  it('RemoveObjectsWithDuplicateProperty returns array with length of 3', () => {
    let arr = [{name:'Aphrodite', type:'Goddess of beauty'}, {name:'Aphrodite', type: 'Goddess of love'}, {name:'Apollo', type:'God of arts'}, {name:'Artemis', type:'Virgin goddess of the hunt'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'name')
    expect(result.length).toEqual(3)
  });
  it('RemoveObjectsWithDuplicateProperty returns array with length of 2', () => {
    let arr = [{name:'Aphrodite', type:'Goddess of beauty'}, {name:'Aphrodite', type: 'Goddess of love'}, {name:'Aphrodite', type:'Goddess of pleasure'}, {name:'Artemis', type:'Virgin goddess of the hunt'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'name')
    expect(result.length).toEqual(2)
  });
  it('RemoveObjectsWithDuplicateProperty returns array with length of 4', () => {
    let arr = [{name:'Aphrodite', type:'Goddess of beauty'}, {name:'Aphrodite', type: 'Goddess of love'}, {name:'Apollo', type:'God of arts'}, {name:'Artemis', type:'Virgin goddess of the hunt'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'type')
    expect(result.length).toEqual(4)
  });
  it('RemoveObjectsWithDuplicateProperty returns unchanged result with non-existing property', () => {
    let arr = [{name:'Aphrodite', type:'Goddess of beauty'}, {name:'Venus', type: 'Goddess of beauty'}, {name:'Apollo', type:'God of arts'}, {name:'Artemis', type:'Virgin goddess of the hunt'}]
    let result = RemoveObjectsWithDuplicateProperty(arr, 'flavour')
    expect(result.length).toEqual(4)
  });
})

describe('Trim', () => {
  it('Trim returns expected value - 1', () => {
    let result = Trim('   G00001    ')
    expect(result).toEqual('G00001')
  });

  it('Trim returns expected value - 2', () => {
    let result = Trim('BT00001')
    expect(result).toEqual('BT00001')
  });

  it('Trim returns expected value - 2', () => {
    let result = Trim('BT 00001')
    expect(result).toEqual('BT 00001')
  });
})

describe('RemoveWhitespace', () => {
  it('RemoveWhitespace returns expected value - Expectation 1', () => {
    let result = RemoveWhitespace(' SE22 8UG     ')
    expect(result).toEqual('SE228UG')
  });

  it('RemoveWhitespace returns expected value - Expectation 2', () => {
    let result = RemoveWhitespace('SE228UG')
    expect(result).toEqual('SE228UG')
  });
})

describe('ReturnCustomHeaders', () => {
  xit('ReturnCustomHeaders returns expected value - Expectation 1', () => {
    let result = ReturnCustomHeaders()
    expect(result['X-EE-Client-Id']).toEqual('xxxboogalooxxxx')  
    expect(result['content-type']).toEqual('application/json')  
  });
})




