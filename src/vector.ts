function modifyParams(target: any, method: string, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;

  descriptor.value = function(arg) {
    if (arguments.length === 1) {
      if (arg instanceof target.constructor) {
        return originalMethod.call(this, [arg]);
      }
      return originalMethod.call(this, arg);
    }
    return originalMethod.call(this, [...arguments]);
  };
}

export default class Vector extends Array {
  constructor(elements: number[] = []) {
    super();

    elements.forEach((el, index) => this[index] = el);
  }

  public map(cb: Function): Vector {
    const result = Vector.gen(this.length);
    this.forEach((el, index, arr) => {
      result[index] = cb(el, index, arr);
    });

    return result;
  }

  /**
   * Addition
   * @param vectors to add to current vector
   */
  public add(vectors: Vector[]): Vector
  public add(...vectors: Vector[]): Vector
  @modifyParams
  public add(vectors) {
    return [this, ...vectors].reduce(
      (acc, v) => {
        v.forEach((el, index) => acc[index] += el);
        return acc;
      },
      Vector.gen(this.length)
    );
  }

  /**
   * Subtraction
   * @param vectors to subtract from current vector
   */
  public sub(vectors: Vector[]): Vector
  public sub(...vectors: Vector[]): Vector
  @modifyParams
  public sub(vectors) {
    return vectors.reduce(
      (acc, v) => {
        v.forEach((el, index) => acc[index] -= el);
        return acc;
      },
      Vector.clone(this)
    );
  }

  /**
   * Scalar multiplication
   * @param param scalar value
   */
  public prod(param: number): Vector;
  /**
   * Dot product
   * @param param another vector
   */
  public prod(param: Vector): number;
  public prod(param: any): any {
    if (param instanceof Vector) {
      return this
        .reduce((acc, v, index) => acc + v * param[index], 0);
    }

    const result = Vector.gen(this.length);
    result.forEach((_, index) => result[index] = this[index] * param);
    return result;
  }

  /**
   * Cross product
   * @param vector another vector
   * @param rightBasis if right-handed coordinate systems
   */
  public crossProd(vector: Vector): Vector
  public crossProd(vector: Vector, rightBasis: boolean): Vector
  public crossProd(vector: Vector, rightBasis: boolean = true): any { // SOLID: open-closed principle
    if (this.length === 3) {
      const prodVec = new Vector([
        this[1] * vector[2] - this[2] * vector[1],
        this[2] * vector[0] - this[0] * vector[2],
        this[0] * vector[1] - this[1] * vector[0]
      ]);

      return rightBasis ? prodVec : prodVec.prod(-1);
    }

    throw new Error('Not implemented'); // KISS: I have to provide basic implementation 
  }

  public mixedProd(vectorA: Vector, vectorB: Vector): number {
    if (this.length === 3) {
      return this.prod(vectorA.crossProd(vectorB));
    }

    throw new Error('Not implemented');
  }

  /**
   * Per element division on scalar value
   * @param scalar 
   */
  public div(scalar: number): Vector {
    const result = Vector.clone(this);
    this.forEach((el, index) => result[index] = el / scalar);
    return result;
  }

  /**
   * Norm (Euclidean norm)
   */
  public norm(): number {
    return Math.sqrt(this.reduce((acc, el) => acc + el * el, 0));
  }

  /**
   * Is a vector equal to current
   * @param vector a vector to compare with
   */
  public equal(vector: Vector): boolean {
    if (this.length !== vector.length) {
      return false;
    }
    for (let i = 0, len = this.length; i < len; i += 1) {
      if (this[i] !== vector[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Is a vector collinear to current
   * @param vector a vector to compare with
   */
  public collinear(vector: Vector): boolean {
    if (this.length === 3) {
      return this.crossProd(vector).norm() === 0;
    }

    for (let i = 0; i < this.length; i += 1) {
      if (this[i] === 0 || vector[i] === 0) {
        throw new Error('Not acceptable');
      }
    }

    const diff = this[0] / vector[0];
    for (let i = 1; i < this.length; i += 1) {
      if (diff !== this[i] / vector[i]) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Is a vector anticollinear to current
   * @param vector a vector to compare with
   */
  public anticollinear(vector: Vector): boolean {
    return this.collinear(vector) && this[0] !== 0 && vector[0] / this[0] < 0;
  }

  /**
   * Is a vector perpendicular to current
   * @param vector a vector to compare with
   */
  public perpendicular(vector: Vector): boolean {
    return this.prod(vector) === 0;
  }


  /**
   * Generate new vector with specified length and elements value
   * @param length length of new vector
   * @param value value of new vector's elements
   */
  static gen(length: number, value: number = 0): Vector {
    return new Vector(Array(length).fill(value, 0, length));
  }

  /**
   * Clone a vector
   * @param vector to clone from
   */
  static clone(vector: Vector): Vector {
    return new Vector(vector);
  }
}
