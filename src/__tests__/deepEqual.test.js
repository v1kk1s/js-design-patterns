import test from 'ava';
import deepEqual from '../app/libs/deepEqual';


test('Should return false if arguments are of different types', t => {
  const comparisonType = deepEqual(1, []);
  t.false(comparisonType);
});

test('Should return true if primitives are equal', t => {
  const comparisonNum = deepEqual(13, 13);
  const comparisonBool = deepEqual(true, true);
  const comparisonString = deepEqual('teapot', 'teapot');
  const comparisonUdef = deepEqual(undefined, undefined);
  t.true(comparisonNum);
  t.true(comparisonBool);
  t.true(comparisonString);
  t.true(comparisonUdef);
});

test('Should return true if null arguments are passed', t => {
  const comparisonNull = deepEqual(null, null);
  t.true(comparisonNull);
});

test('Should return true if empty objects are equal', t => {
  const comparisonEmptyObjects = deepEqual({}, {});
  t.true(comparisonEmptyObjects);
});

test('Should return true if empty arrays are equal', t => {
  const comparisonEmptyArrays = deepEqual([], []);
  t.true(comparisonEmptyArrays);
});


//test('Should return true if arrays are equal', t => {
//  const comparisonArray = deepEqual([1, 'hey', null, { coffee: 'drink' }], [1, 'hey', null, { coffee: 'drink' }]);
//
//  t.true(comparisonArray);
//});

