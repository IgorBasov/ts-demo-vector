import Vector2D from './src/vector2d';

describe('Constructor', () => {

  test('should create new vector with correct length', () => {
    const arr = [1, 2];
    const vector = new Vector2D(arr);

    expect(vector.dims()).toBe(arr.length);
  });

  test('should throw an error when array with wrong length passed', () => {
    expect(() => {
      new Vector([1, 1, 1]);
    }).toThrow(Error);
  });

});