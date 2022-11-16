module.exports = wallaby => ({
  env: { type: 'node' },
  files: ['src/**/*.ts'],
  tests: ['test/**/*.spec.ts'],
  setup: async function (w) {
    const mocha = w.testFramework;
    const rootHooksFile = w.localProjectDir + `/test/hooks.js`;
    const rootHook = await import(rootHooksFile);
    mocha.suite.afterEach = rootHook.mochaHooks.afterEach;
  },
});
