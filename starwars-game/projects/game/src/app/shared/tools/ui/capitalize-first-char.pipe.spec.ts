import { CapitalizeFirstCharPipe } from './capitalize-first-char.pipe';

describe('CapitalizeFirstCharPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeFirstCharPipe();
    expect(pipe).toBeTruthy();
  });
});
