const { redisHost, redisPort } = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

const fib = (index) => {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2)
}

sub.on('message',  (channel, message) => {
  console.log("LOL", message)
  redisClient.hSet('values', message, fib(parseInt(message)))
});
sub.subscribe('insert')