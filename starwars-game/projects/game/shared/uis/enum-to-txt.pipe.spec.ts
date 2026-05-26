import { EnumToTxtPipe } from '../../src/app/shared/pipes/enum-to-txt.pipe';

describe('EnumToTxtPipe', () => {
  it('create an instance', () => {
    const pipe = new EnumToTxtPipe();
    expect(pipe).toBeTruthy();
  });
});
