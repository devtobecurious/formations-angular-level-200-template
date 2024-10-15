import { MyUpperCasePipe } from './my-upper-case.pipe';

describe('MyUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new MyUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
