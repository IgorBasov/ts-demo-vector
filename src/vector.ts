function paramsToArray(target: any, method: string, descriptor: PropertyDescriptor) {
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

interface IVector<V> {
  dims(): number;
  toArray(): number[];
  get(index: number): number | never;
  add(vectors: V[]): V;
  add(...vectors: V[]): V;
  sub(vectors: V[]): V;
  sub(...vectors: V[]): V;
  prod(scalar: number): V;
  prod(vector: V): number;
  div(scalar: number): V;
  norm(): number;
  equal(vector: V): boolean;
  perpendicular(vector: V): boolean;
  crossProd(vector: V, rightBasis: boolean): V
  mixedProd(a: V, b: V): number;
  collinear(vector: V): boolean;
  anticollinear(vector: V): boolean;
}

class Vector implements IVector<Vector> {
  constructor(protected elements: number[] = []) {}

  /**
   * Return dimensions qty of the vector
   */
  public dims() {
    return this.elements.length;
  }

  /**
   * Return array representation
   */
  public toArray(): number[] {
    return [...this.elements];
  }

  /**
   * Return element by index
   * @param index of the element
   */
  public get(index: number): number {
    return this.elements[index];
  }

  /**
   * Addition
   * @param vectors to add to current vector
   */
  public add(vectors: Vector[]): Vector
  public add(...vectors: Vector[]): Vector
  @paramsToArray
  public add(vectors) {
    const elements = vectors
      .reduce(
        (acc, vec) => acc.map((el, index) => el += vec.get(index)),
        this.toArray()
      );

    return new Vector(elements);
  }

  /**
   * Subtraction
   * @param vectors to subtract from current vector
   */
  public sub(vectors: Vector[]): Vector
  public sub(...vectors: Vector[]): Vector
  @paramsToArray
  public sub(vectors) {
    const elements = vectors
      .reduce(
        (acc, vec) => acc.map((el, index) => el -= vec.get(index)),
        this.toArray()
      );

    return new Vector(elements);
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
    const elements = this.toArray();

    if (param instanceof Vector) { // Dot product
      return elements
        .reduce((acc, el, index) => acc + el * param.get(index), 0);
    }

    // Per element multiplication on a scalar value
    return new Vector(elements.map(el => el * param));
  }

  /**
   * Per element division on scalar value
   * @param scalar 
   */
  public div(scalar: number): Vector {
    return new Vector(this.toArray().map(el => el / scalar));
  }

  /**
   * Norm (Euclidean norm)
   */
  public norm(): number {
    return Math.sqrt(
      this.toArray().reduce((acc, el) => acc + el * el, 0)
    );
  }

  /**
   * Is a vector equal to the current
   * @param vector a vector to compare with
   */
  public equal(vector: Vector): boolean {
    const dimensions = this.elements.length;

    if (dimensions !== vector.dims()) {
      return false;
    }

    for (let i = 0; i < dimensions; i += 1) {
      if (this.elements[i] !== vector.get(i)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Is a vector perpendicular to the current
   * @param vector a vector to compare with
   */
  public perpendicular(vector: Vector): boolean {
    return this.prod(vector) === 0;
  }

  /**
   * Is a vector collinear to current
   * @param vector a vector to compare with
   */
  public collinear(vector: Vector): boolean {
    const dimensions = this.elements.length;

    // zero-vector collinear to any vector
    if (
      this.toArray().reduce((acc, el) => acc + el, 0) === 0
      || vector.toArray().reduce((acc, el) => acc + el, 0) === 0
    ) {
      return true;
    }

    const diffs = new Set();

    for (let i = 0; i < dimensions; i += 1) {
      if (this.elements[i] !== 0) {
        if (vector.get(i) !== 0) {
          diffs.add(this.elements[i] / vector.get(i));
        } else {
          return false;
        }
      } else if (vector.get(i) !== 0) {
        return false;
      }
    }

    return diffs.size === 1;
  }

  /**
   * Is a vector anticollinear to current
   * @param vector a vector to compare with
   */
  public anticollinear(vector: Vector): boolean {
    if (!this.collinear(vector)) {
      return false;
    }

    const dimensions = this.elements.length;
    
    for (let i = 0; i < dimensions; i += 1) {
      if (this.elements[i] * vector.get(i) > 0 && this.elements[i] + vector.get(i) !== 0) {
        return false;
      }
    }

    return true;
  }


  /**
   * Cross production - Not implemented
   */
  public crossProd(vector: Vector, rightBasis: boolean = true): Vector {
    throw new Error('Not implemented');
  }

  /**
   * Mixed production - Not implemented
   */
  public mixedProd(a: Vector, b: Vector): number {
    throw new Error('Not implemented');
  }
}

export default Vector;
