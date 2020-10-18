import Vector from './vector';

export default class Vector2D extends Vector {
  constructor(protected elements: number[]) {
    super(elements);
    if (elements.length !== 2) {
      throw new Error('Wrong parameters: array should contain 2 elements');
    }
  }
};
