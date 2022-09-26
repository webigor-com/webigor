import { greeter } from './greeter';

describe('greeter', () => {
  it('should work', () => {
    expect(greeter('Igor')).toEqual('Hello Igor');
  });
});
