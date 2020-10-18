import Vector from './vector';

export default class Vector3D extends Vector {
  constructor(protected elements: number[]) {
    super(elements);
    if (elements.length !== 3) {
      throw new Error('Wrong parameters: array should contain 3 elements');
    }
  }

  /**
   * Is a vector collinear to the current
   * @param vector a vector to compare with
   */
  public collinear(vector: Vector3D): boolean {
    return this.crossProd(vector).norm() === 0;
  }

  /**
   * Cross product
   * @param vector another vector
   * @param rightBasis if right-handed coordinate systems
   */
  public crossProd(vector: Vector3D, rightBasis: boolean = true): Vector3D {
    const vectorArray = vector.toArray();
    const prodVec = new Vector3D([
      this.elements[1] * vectorArray[2] - this.elements[2] * vectorArray[1],
      this.elements[2] * vectorArray[0] - this.elements[0] * vectorArray[2],
      this.elements[0] * vectorArray[1] - this.elements[1] * vectorArray[0]
    ]);

    return rightBasis ? prodVec : prodVec.prod(-1) as Vector3D;
  }

  /**
   * Mixed vector product
   * @param a second vector
   * @param b third vector
   */
  public mixedProd(a: Vector3D, b: Vector3D): number {
    return this.prod(a.crossProd(b));
  }
};
