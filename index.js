const echo = require('./src/echo');
const ls = require('./src/ls');
const sleep = require('./src/sleep');

/**
 * Test section
 */
(async () => {
  // Testing ls command
  console.log(
    await ls('./', 'console', {
      args: {
        a: true,
        l: true,
      },
    })
  );

  // Testing echo command
  echo('hello world', {
    color: 'red',
    background: 'black',
    filter: 'bright',
  });

  // Testing sleep command
  await sleep(1);
})();

module.exports = {
  ls,
  echo,
  sleep,
};
