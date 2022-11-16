import { SOME_INFO } from './some-info';

export const mochaHooks = {
  afterEach(done) {
    console.log(SOME_INFO);
    done();
  },
};
