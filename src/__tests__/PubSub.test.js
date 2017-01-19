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

let stupidSpy;

test.beforeEach(() => {
  stupidSpy = (...args) => {
    if (!stupidSpy.args) {
      stupidSpy.args = [];
    }

    stupidSpy.args.push(args);
    stupidSpy.calls += 1;

    return stupidSpy.calls;
  };
  stupidSpy.calls = 0;
});

test('PubSub should be a singleton', t => {
  const pubSub2 = new PubSub();
  t.deepEqual(pubSub, pubSub2);
});

test('Topic added after subscription', t => {
  const { prev, next } = topicsLength(testTopic, testListener);
  t.is(prev + 1, next);
});

test('Subscribe values should not be falsy', t => {
  const { prev, next } = topicsLength();
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
  pubSub.publish(testTopic, { testInfo });
  t.is(stupidSpy.calls, 1);
  t.deepEqual(stupidSpy.args[0][0], { testInfo });
});


test('Publish should pass empty object', t => {
  topicsLength(testTopic, stupidSpy);
  pubSub.publish(testTopic);

  t.deepEqual(stupidSpy.args[0][0], {});
});

test('Publish value should not be falsy', t => {
  topicsLength(testTopic, stupidSpy);
  pubSub.publish('some topic');

  t.is(stupidSpy.calls, 0);
});