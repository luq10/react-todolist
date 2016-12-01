// *Some* environments (phantomjs) don't have es5 (Function.prototype.bind)
// require('babel-core/polyfill');

// require all modules ending in ".spec" from the
// current directory and all subdirectories
var testsContext = require.context('./test', true, /.spec$/);

testsContext.keys().forEach(function(path) {
  try {
    testsContext(path);
  } catch(err) {
    console.error('[ERROR] WITH SPEC FILE: ', path);
    console.error(err);
  }
});
