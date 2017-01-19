import test from 'ava';
import PubSub from '../app/controllers/PubSub';

const pubSub = new PubSub();
const testTopic = 'Test topic';
const testInfo = 'Lorem';
const testListener = () => {};

const topicsLength = (topic, listener) => {
  const prev = Object.keys(pubSub.topics).length;
  pubSub.subscribe(topic, listener);
  const next = Object.keys(pubSub.topics).length;

  return { prev, next }
};

const topicsIndex = (topic, listener) => {
  pubSub.subscribe(topic, listener);
  return pubSub.topics[topic].queue.indexOf(listener);
};

const stupidSpy = () => {
  return stupidSpy.calls ? stupidSpy.calls += 1 : stupidSpy.calls = 1;
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
  const index = topicsIndex(testTopic, testListener);
  pubSub.unsubscribe(testTopic, testListener);
  t.is(pubSub.topics[testTopic].queue[index], undefined);
});

test('Unsubscribe values should not be falsy', t => {
  const index = topicsIndex(testTopic, testListener);
  const falsyTopic = 0;
  pubSub.unsubscribe(testTopic, 0);
  pubSub.unsubscribe(falsyTopic, testListener);
  t.not(pubSub.topics[testTopic].queue[index], undefined);
  t.is(pubSub.topics[falsyTopic], undefined);
});

test('Was listener called', t => {
  topicsLength(testTopic, stupidSpy);
  pubSub.publish(testTopic, testInfo);
  t.is(stupidSpy.calls, 1);
});