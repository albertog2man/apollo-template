import chai, { assert } from 'chai';
import truncate from '../truncate.js';
import userFactory from '../factories/user';
describe('User model', () => {
  let user;
  beforeEach(async () => {
    await truncate();
    user = await userFactory();
  });

  it('assert that 1 equals 1', async () => {
    console.log(user)
    assert(1 === 1, 'foo is not bar');
  });
});