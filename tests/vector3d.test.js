import Vector3D from '../src/vector3d';

describe('Constructor', () => {

  test('should create new vector with correct length', () => {
    const arr = [1, 2, 3];
    const vector = new Vector3D(arr);

    expect(vector.dims()).toBe(arr.length);
  });

  test('should throw an error when array with wrong length passed', () => {
    expect(() => {
      new Vector3D([1, 1, 1, 1]);
    }).toThrow(Error);
  });

  describe('vector3d.collinear method', () => {

    test('should return correct result (without zeros)', () => {
      const a = new Vector3D([1, 2, 3]);
      const b = new Vector3D([1, 2, 3]);

      expect(a.collinear(b)).toBe(true);
    });

    test('should return correct result (with zeros)', () => {
      const a = new Vector3D([1, 0, 3]);
      const b = new Vector3D([1, 0, 3]);

      expect(a.collinear(b)).toBe(true);
    });

  });

  describe('vector3d.anticollinear method', () => {

    test('should return correct result (without zeros)', () => {
      const a = new Vector3D([1, 2, 3]);
      const b = new Vector3D([1, 2, 3]);

      expect(a.anticollinear(b)).toBe(false);
    });

    test('should return correct result (with zeros)', () => {
      const a = new Vector3D([1, 0, 3]);
      const b = new Vector3D([1, 0, 3]);

      expect(a.anticollinear(b)).toBe(false);
    });

  });

  describe('vector.crossProd method', () => {

    test('should return a new vector', () => {
      const a = new Vector3D([1, 2, 2]);
      const b = new Vector3D([1, 2, 2]);

      expect(a.crossProd(b) !== a).toBe(true);
    });

    test('should return a vector', () => {
      const a = new Vector3D([1, 2, 2]);
      const b = new Vector3D([2, 2, 2]);

      expect(a.crossProd(b).constructor === Vector3D).toBe(true);
    });

    test('should return correct result', () => {
      const aVector = new Vector3D([1, 2, 2]);
      const bVector = new Vector3D([2, 2, 2]);
      const a = aVector.toArray();
      const b = bVector.toArray();
      const result = new Vector3D([
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
      ]);

      expect(aVector.crossProd(bVector)).toEqual(result);
    });

    test('should return correct result (for left-handed basis)', () => {
      const aVector = new Vector3D([1, 2, 2]);
      const bVector = new Vector3D([2, 2, 2]);
      const a = aVector.toArray();
      const b = bVector.toArray();
      const result = new Vector3D([
        -(a[1] * b[2] - a[2] * b[1]),
        -(a[2] * b[0] - a[0] * b[2]),
        -(a[0] * b[1] - a[1] * b[0])
      ]);

      expect(aVector.crossProd(bVector, false)).toEqual(result);
    });

  });

  describe('vector.mixedProd method', () => {

    test('should return a number', () => {
      const c = new Vector3D([2, 2, 5]);
      const a = new Vector3D([1, 2, 3]);
      const b = new Vector3D([1, 2, 4]);

      expect(typeof c.mixedProd(a, b)).toBe('number');
    });

    test('should return correct result', () => {
      const cVector = new Vector3D([2, 2, 5]);
      const aVector = new Vector3D([1, 2, 3]);
      const bVector = new Vector3D([1, 2, 4]);
      const a = aVector.toArray();
      const b = bVector.toArray();
      const c = cVector.toArray();

      const crossProd = [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
      ];

      const result = c[0] * crossProd[0]
        + c[1] * crossProd[1]
        + c[2] * crossProd[2];

      expect(cVector.mixedProd(aVector, bVector)).toBe(result);
    });

  });

});