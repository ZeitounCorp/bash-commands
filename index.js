const echo = require('./src/echo');
const ls = require('./src/ls');

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
})();

module.exports = {
  ls,
  echo,
};
