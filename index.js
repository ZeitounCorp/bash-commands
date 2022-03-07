const ls = require('./packages/ls_/');

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
