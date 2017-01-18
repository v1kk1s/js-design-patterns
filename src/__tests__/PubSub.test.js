import test from 'ava';
import PubSub from '../app/controllers/PubSub';

const pubSub = new PubSub();
const testTopic = 'Test topic';
const testListener = () => {};

const topicsLength = (topic, listener) => {
  const prev = Object.keys(pubSub.topics).length;
  pubSub.subscribe(topic, listener);
  const next = Object.keys(pubSub.topics).length;

  return { prev, next }
};

const topicsIndex = () => {
  pubSub.subscribe(testTopic, testListener);
  return pubSub.topics[testTopic].queue.indexOf(testListener);
};

test('Topic added after subscription', t => {
  const { prev, next } = topicsLength(testTopic, testListener);
  t.is(prev + 1, next);
});

test('Subscribe values should not be falsy', t => {
  const { prev, next } = topicsLength(testTopic, testListener);
  t.is(prev, next);
});

test('Check if topic is deleted', t => {
  const index = topicsIndex();
  pubSub.unsubscribe(testTopic, testListener);
  t.is(pubSub.topics[testTopic].queue[index], undefined);
});

//test('Unsubscribe values should not be falsy', t => {
//  const index = topicsIndex();
//  pubSub.unsubscribe(0, testListener);
//});
