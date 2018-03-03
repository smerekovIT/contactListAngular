import { JsonTransformStringPipe } from './json-transform-string.pipe';

describe('JsonTransformStringPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonTransformStringPipe();
    expect(pipe).toBeTruthy();
  });
});
