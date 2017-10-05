import normalizeCSSUnit from './index';

describe('index.js', () => {
  describe('given a string as a value', () => {
    const result = normalizeCSSUnit('10rem');

    it('should return the same string as is', () => {
      expect(result).toBe('10rem');
    });

    describe('given the string has extra blank spaces', () => {
      it('should trim the string', () => {
        expect(normalizeCSSUnit(' 100px ')).toBe('100px');
      });
    });
  });
  describe('given an integer as a value', () => {
    const result = normalizeCSSUnit(200);

    it('should return the value as pixels', () => {
      expect(result).toBe('200px');
    });
  });
  describe('given a number with decimals as a value', () => {
    const result = normalizeCSSUnit(20.5);

    it('should return the value as pixels', () => {
      expect(result).toBe('20.5px');
    });
  });
  describe('given an invalid argument was passed', () => {
    it('should throw a TypeError', () => {
      expect(() => {
        normalizeCSSUnit({});
      }).toThrowError(TypeError);
    });
    it('should throw an error with correct message', () => {
      expect(() => {
        normalizeCSSUnit([10]);
      }).toThrowError(
        'You need to pass a number or a string as an argument. Array provided.'
      );
      expect(() => {
        normalizeCSSUnit({});
      }).toThrowError(
        'You need to pass a number or a string as an argument. Object provided.'
      );
    });
  });
});
