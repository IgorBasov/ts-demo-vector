import Vector from './src/vector';

describe('Vector.gen method', () => {

  test('should generate vector with correct length', () => {
    const length = 3;

    expect(Vector.gen(length).length).toBe(length);
  });

  test('should generate vector with specified values', () => {
    const length = 3;
    const value = 1;
    const v = Vector.gen(length, value);

    expect(v.reduce((acc, v) => acc + v)).toBe(length * value);
  });
  
  test('should generate zero vector', () => {
    const length = 3;
    const v = Vector.gen(length);
    
    expect(v.reduce((acc, v) => acc + v)).toBe(0);
  });

});

describe('Vector.clone method', () => {

  test('should make Vector instance', () => {
    const vector = new Vector([1, 2, 3]);
  
    expect(Vector.clone(vector)).toBeInstanceOf(Vector);
  });

  test('should make Vector that will be not strictly equal to the origin one', () => {
    const vector = new Vector([1, 2, 3]);
  
    expect(Vector.clone(vector) === vector).toBe(false);
  });

  test('should make Vector with equal elements', () => {
    const vector = new Vector([1, 2, 3]);
    const newVector = Vector.clone(vector);

    expect(newVector).toEqual(vector);
  });

});

describe('Constructor', () => {

  test('should create new vector with correct length', () => {
    const arr = [1, 2];
    const vector = new Vector(arr);

    expect(vector.length).toBe(arr.length);
  });

  test('should create new vector with correct elements', () => {
    const arr = [1, 2];
    const vector = new Vector(arr);

    expect(vector[0] === arr[0] && vector[1] === arr[1]).toBe(true);
  });

  test('shoud create empty vector without parameters', () => {
    expect(new Vector().length).toBe(0);
  });

});

describe('vector.add method', () => {

  describe('test with list of parameters (i.e., `a.add(b, c, ...)`)', () => {

    describe('with one parameter', () => {

      test('should return new vector as a result of operation', () => {
        const a = new Vector([1, 2]);
        const b = new Vector([1, 2]);
    
        expect(a.add(b) !== a).toBe(true);
      });
    
      test('should return correct result', () => {
        const x0 = 1;
        const x1 = 2;
        const c = (new Vector([x0, x1])).add(new Vector([x0, x1]));
    
        expect(c[0] === 2 * x0 && c[1] === 2 * x1).toBe(true);
      });

    });

    describe('with multiple parameters', () => {

      test('should return new vector as a result of operation', () => {
        const a = new Vector([1, 2]);
        const b = new Vector([1, 2]);
        const c = new Vector([1, 2]);
    
        expect(a.add(b, c) !== a).toBe(true);
      });
    
      test('should return correct result', () => {
        const x0 = 1;
        const x1 = 2;
        const c = (new Vector([x0, x1]))
          .add(
            new Vector([x0, x1]),
            new Vector([x0, x1])
          );
    
        expect(c[0] === 3 * x0 && c[1] === 3 * x1).toBe(true);
      });

    });
    
  });
  
  describe('test with array parameter (i.e., `a.add([b, c, ...])`)', () => {

    describe('with one parameter', () => {

      test('should return new vector as a result of operation', () => {
        const a = new Vector([1, 2]);
        const b = new Vector([1, 2]);
    
        expect(a.add([b]) !== a).toBe(true);
      });
    
      test('should return correct result', () => {
        const x0 = 1;
        const x1 = 2;
        const c = (new Vector([x0, x1])).add([new Vector([x0, x1])]);
    
        expect(c[0] === 2 * x0 && c[1] === 2 * x1).toBe(true);
      });

    });

    describe('with multiple parameters', () => {

      test('should return new vector as a result of operation', () => {
        const a = new Vector([1, 2]);
        const b = new Vector([1, 2]);
        const c = new Vector([1, 2]);
    
        expect(a.add([b, c]) !== a).toBe(true);
      });
    
      test('should return correct result', () => {
        const x0 = 1;
        const x1 = 2;
        const c = (new Vector([x0, x1]))
          .add([
            new Vector([x0, x1]),
            new Vector([x0, x1])
          ]);
    
        expect(c[0] === 3 * x0 && c[1] === 3 * x1).toBe(true);
      });

    });
    
  });

});

describe('vector.sub method', () => {

  describe('test with list of parameters (i.e., `a.sub(b, c, ...)`)', () => {

    describe('with one parameter', () => {

      test('should return new vector as a result of operation', () => {
        const a = new Vector([1, 2]);
        const b = new Vector([1, 2]);
    
        expect(a.sub(b) !== a).toBe(true);
      });
    
      test('should return correct result', () => {
        const x0 = 1;
        const x1 = 2;
        const c = (new Vector([x0, x1])).sub(new Vector([x0, x1]));
    
        expect(c[0] === 0 && c[1] === 0).toBe(true);
      });

    });

    describe('with multiple parameters', () => {

      test('should return new vector as a result of operation', () => {
        const a = new Vector([1, 2]);
        const b = new Vector([1, 2]);
        const c = new Vector([1, 2]);
    
        expect(a.sub(b, c) !== a).toBe(true);
      });
    
      test('should return correct result', () => {
        const x0 = 1;
        const x1 = 2;
        const c = (new Vector([x0 * 2, x1 * 2]))
          .sub(
            new Vector([x0, x1]),
            new Vector([x0, x1])
          );
    
        expect(c[0] === 0 && c[1] === 0).toBe(true);
      });

    });
    
  });
  
  describe('test with array parameter (i.e., `a.sub([b, c, ...])`)', () => {

    describe('with one parameter', () => {

      test('should return new vector as a result of operation', () => {
        const a = new Vector([1, 2]);
        const b = new Vector([1, 2]);
    
        expect(a.sub([b]) !== a).toBe(true);
      });
    
      test('should return correct result', () => {
        const x0 = 1;
        const x1 = 2;
        const c = (new Vector([x0, x1])).sub([new Vector([x0, x1])]);
    
        expect(c[0] === 0 && c[1] === 0).toBe(true);
      });

    });

    describe('with multiple parameters', () => {

      test('should return new vector as a result of operation', () => {
        const a = new Vector([1, 2]);
        const b = new Vector([1, 2]);
        const c = new Vector([1, 2]);
    
        expect(a.sub([b, c]) !== a).toBe(true);
      });
    
      test('should return correct result', () => {
        const x0 = 1;
        const x1 = 2;
        const c = (new Vector([x0 * 2, x1 * 2]))
          .sub([
            new Vector([x0, x1]),
            new Vector([x0, x1])
          ]);
    
        expect(c[0] === 0 && c[1] === 0).toBe(true);
      });

    });
    
  });

});

describe('vector.prod method', () => {

  describe('Dot product', () => {

    test('should return a number', () => {
      const a = new Vector([1, 2]);
      const b = new Vector([1, 2]);

      expect(typeof a.prod(b)).toBe('number');
    });

    test('should return correct result', () => {
      const a = new Vector([1, 2]);
      const b = new Vector([1, 2]);
      const result = a[0] * b[0] + a[1] * b[1];

      expect(a.prod(b)).toBe(result);
    });

  });

  describe('Product on scalar', () => {

    test('should return a vector', () => {
      const a = new Vector([1, 2]);
      const b = 2;

      expect(a.prod(b).constructor === Vector).toBe(true);
    });

    test('should return correct result', () => {
      const a = new Vector([1, 2]);
      const b = 2;
      const result = a.prod(b);

      expect(result[0] === a[0] * b && result[1] === a[1] * b).toBe(true);
    });

  });

});

describe('vector.crossProd method', () => {

  test('should throw error when vector`s dimension is not equal to 3', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 2]);

    expect(a.crossProd.bind(a, b)).toThrow(Error);
  });

  test('should return a new vector', () => {
    const a = new Vector([1, 2, 2]);
    const b = new Vector([1, 2, 2]);

    expect(a.crossProd(b) !== a).toBe(true);
  });

  test('should return a vector', () => {
    const a = new Vector([1, 2, 2]);
    const b = new Vector([2, 2, 2]);

    expect(a.crossProd(b).constructor === Vector).toBe(true);
  });

  test('should return correct result', () => {
    const a = new Vector([1, 2, 2]);
    const b = new Vector([2, 2, 2]);
    const result = new Vector([
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0]
    ]);

    expect(a.crossProd(b)).toEqual(result);
  });

  test('should return correct result (for left-handed basis)', () => {
    const a = new Vector([1, 2, 2]);
    const b = new Vector([2, 2, 2]);
    const result = new Vector([
      -(a[1] * b[2] - a[2] * b[1]),
      -(a[2] * b[0] - a[0] * b[2]),
      -(a[0] * b[1] - a[1] * b[0])
    ]);

    expect(a.crossProd(b, false)).toEqual(result);
  });

});

describe('vector.mixedProd method', () => {

  test('should throw error when vector`s dimension is not equal to 3', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 2]);
    const c = new Vector([1, 2]);

    expect(a.mixedProd.bind(a, b, c)).toThrow(Error);
  });

  test('should return a number', () => {
    const c = new Vector([2, 2, 5]);
    const a = new Vector([1, 2, 3]);
    const b = new Vector([1, 2, 4]);

    expect(typeof c.mixedProd(a, b)).toBe('number');
  });

  test('should return correct result', () => {
    const c = new Vector([2, 2, 5]);
    const a = new Vector([1, 2, 3]);
    const b = new Vector([1, 2, 4]);

    const crossProd = new Vector([
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0]
    ]);

    const result = c[0] * crossProd[0]
      + c[1] * crossProd[1]
      + c[2] * crossProd[2];

    expect(c.mixedProd(a, b)).toBe(result);
  });

});

describe('vector.div method', () => {

  test('should return a vector', () => {
    const a = new Vector([1, 2]);
    const b = 2;

    expect(a.div(b).constructor === Vector).toBe(true);
  });

  test('should return new vector', () => {
    const a = new Vector([1, 2]);
    const b = 2;

    expect(a.div(b) !== a).toBe(true);
  });

  test('should return correct result', () => {
    const a = new Vector([1, 2]);
    const b = 2;
    const result = a.div(b);

    expect(result[0] === a[0] / b && result[1] === a[1] / 2).toBe(true);
  });

});

describe('vector.norm method', () => {

  test('should return a number', () => {
    expect(typeof new Vector([1, 2]).norm()).toBe('number');
  });

  test('should return correct result', () => {
    const a = new Vector([1, 2]);
    const result = Math.sqrt(
      a.map(el => el * el).reduce((acc, el) => acc + el)
    );

    expect(a.norm()).toBe(result);
  });

});

describe('vector.equal method', () => {

  test('should return a boolean value', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 2]);

    expect(typeof a.equal(b)).toBe('boolean');
  });

  test('should return false, if vectors have different length', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 2, 3]);

    expect(a.equal(b)).toBe(false);
  });

  test('should return false, if vectors are not equal', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 3]);

    expect(a.equal(b)).toBe(false);
  });

  test('should return true, if vectors are equal', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 2]);

    expect(a.equal(b)).toBe(true);
  });

});

describe('vector.collinear method', () => {

  test('should return a boolean value', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 2]);

    expect(typeof a.collinear(b)).toBe('boolean');
  });

  test('should return correct result (true) with 3-dimensional vectors', () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([2, 4, 6]);

    expect(a.collinear(b)).toBe(true);
  });

  test('should return correct result (false) with 3-dimensional vectors', () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([7, 4, 6]);

    expect(a.collinear(b)).toBe(false);
  });

  test('should return correct result with non 3-dimensional vectors', () => {
    const a = new Vector([7, 2]);
    const b = new Vector([2, 4]);

    expect(a.collinear(b)).toBe(false);
  });

  test('should throw an error for non 3-domensional vectors with zero elements', () => {
    const a = new Vector([7, 2]);
    const b = new Vector([2, 0]);

    expect(a.collinear.bind(a, b)).toThrow(Error);
  });

});

describe('vector.anticollinear method', () => {

  test('should return a boolean value', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 2]);

    expect(typeof a.anticollinear(b)).toBe('boolean');
  });

  describe('3-dimensional vectors', () => {

    test('vectors are collinear, but not anticollinear', () => {
      const a = new Vector([1, 2, 3]);
      const b = new Vector([2, 4, 6]);
  
      expect(a.anticollinear(b)).toBe(false);
    });

    test('vectors are collinear and anticollinear', () => {
      const a = new Vector([1, -2, 3]);
      const b = new Vector([-2, 4, -6]);
  
      expect(a.anticollinear(b)).toBe(true);
    });

  });

  describe('non 3-dimensional vectors', () => {

    test('vectors are collinear, but not anticollinear', () => {
      const a = new Vector([1, 2]);
      const b = new Vector([2, 4]);
  
      expect(a.anticollinear(b)).toBe(false);
    });

    test('vectors are collinear and anticollinear', () => {
      const a = new Vector([1, -2]);
      const b = new Vector([-2, 4]);
  
      expect(a.anticollinear(b)).toBe(true);
    });

    test('should throw an error for vectors with zero in elements', () => {
      const a = new Vector([7, 2]);
      const b = new Vector([2, 0]);
  
      expect(a.anticollinear.bind(a, b)).toThrow(Error);
    });

  });

});

describe('vector.perpendicular method', () => {

  test('should return a boolean value', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 2]);

    expect(typeof a.perpendicular(b)).toBe('boolean');
  });

  describe('should return correct value', () => {

    test('not perpendicular', () => {
      const a = new Vector([1, 2]);
      const b = new Vector([1, 2]);
  
      expect(a.perpendicular(b)).toBe(false);
    });

    test('perpendicular', () => {
      const a = new Vector([1, 0]);
      const b = new Vector([0, 2]);
  
      expect(a.perpendicular(b)).toBe(true);
    });

  });

});
