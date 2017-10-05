import normalizeCssUnit from './index';

describe('index.js', () => {
  it('should say something', () => {
    expect(normalizeCssUnit('🐰')).toEqual('👉 🐰 👈');
    expect(normalizeCssUnit()).toEqual('No args passed!');
  });
});
