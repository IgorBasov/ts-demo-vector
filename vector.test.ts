import Vector from './src/vector';

describe('Constructor', () => {

  test('should create new vector with correct length', () => {
    const arr = [1, 2];
    const vector = new Vector(arr);

    expect(vector.dims()).toBe(arr.length);
  });

  test('should create new vector with correct elements', () => {
    const arr = [1, 2];
    const vector = new Vector(arr);

    expect(vector.get(0) === arr[0] && vector.get(1) === arr[1]).toBe(true);
  });

  test('shoud create empty vector without parameters', () => {
    expect(new Vector().dims()).toBe(0);
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
    
        expect(c.get(0) === 2 * x0 && c.get(1) === 2 * x1).toBe(true);
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
    
        expect(c.get(0) === 3 * x0 && c.get(1) === 3 * x1).toBe(true);
      });

    });
    
  });
  
  describe('test with array parameter (i.e., `a.add([b, c, ...])`)', () => {

    describe('with array parameter', () => {

      test('should return new vector as a result of operation', () => {
        const a = new Vector([1, 2]);
        const b = new Vector([1, 2]);
    
        expect(a.add([b]) !== a).toBe(true);
      });
    
      test('should return correct result', () => {
        const x0 = 1;
        const x1 = 2;
        const c = (new Vector([x0, x1])).add([new Vector([x0, x1])]);
    
        expect(c.get(0) === 2 * x0 && c.get(1) === 2 * x1).toBe(true);
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
    
        expect(c.get(0) === 3 * x0 && c.get(1) === 3 * x1).toBe(true);
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
    
        expect(c.get(0) === 0 && c.get(1) === 0).toBe(true);
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
    
        expect(c.get(0) === 0 && c.get(1) === 0).toBe(true);
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
    
        expect(c.get(0) === 0 && c.get(1) === 0).toBe(true);
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
    
        expect(c.get(0) === 0 && c.get(1) === 0).toBe(true);
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
      const result = a.get(0) * b.get(0) + a.get(1) * b.get(1);

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

      expect(result.get(0) === a.get(0) * b && result.get(1) === a.get(1) * b).toBe(true);
    });

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

    expect(
      result.get(0) === a.get(0) / b
      && result.get(1) === a.get(1) / 2
    ).toBe(true);
  });

});

describe('vector.norm method', () => {

  test('should return a number', () => {
    expect(typeof new Vector([1, 2]).norm()).toBe('number');
  });

  test('should return correct result', () => {
    const a = new Vector([1, 2]);
    const result = Math.sqrt(
      a.toArray().map(el => el * el).reduce((acc, el) => acc + el)
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

  test('should return correct result (true) with zero-vector', () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([0, 0, 0]);

    expect(a.collinear(b)).toBe(true);
  });

  test('should return correct result (true) 3 dims', () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([2, 4, 6]);

    expect(a.collinear(b)).toBe(true);
  });

  test('should return correct result (false) 3 dims', () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([7, 4, 6]);

    expect(a.collinear(b)).toBe(false);
  });

  test('should return correct result (false) 2 dims', () => {
    const a = new Vector([7, 2]);
    const b = new Vector([2, 4]);

    expect(a.collinear(b)).toBe(false);
  });

  test('should return correct result (false) with zero element in one vector', () => {
    const a = new Vector([7, 2]);
    const b = new Vector([2, 0]);

    expect(a.collinear(b)).toBe(false);
  });

  test('should return correct result (true) with zero elements in both vectors in same position', () => {
    const a = new Vector([7, 0]);
    const b = new Vector([2, 0]);

    expect(a.collinear(b)).toBe(true);
  });

  test('should return correct result (false) with zero elements in both vectors in different position', () => {
    const a = new Vector([7, 0]);
    const b = new Vector([0, 1]);

    expect(a.collinear(b)).toBe(false);
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

    test('vectors are anticollinear', () => {
      const a = new Vector([1, -2, 3]);
      const b = new Vector([-2, 4, -6]);
  
      expect(a.anticollinear(b)).toBe(true);
    });

  });

  describe('2-dimensional vectors', () => {

    test('vectors are collinear, but not anticollinear', () => {
      const a = new Vector([1, 2]);
      const b = new Vector([2, 4]);
  
      expect(a.anticollinear(b)).toBe(false);
    });

    test('vectors are anticollinear', () => {
      const a = new Vector([1, -2]);
      const b = new Vector([-2, 4]);
  
      expect(a.anticollinear(b)).toBe(true);
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
