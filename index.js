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
})();

module.exports = {
  ls,
};
