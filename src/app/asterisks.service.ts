import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsterisksService {
  getAsterisks(matrixSize: number): Array<Array<string>> {
    const asterisk = '&lowast;';
    const dot = '&bull;';
    const matrix = new Array(matrixSize).fill(null).map(() => new Array(matrixSize).fill(dot));
    const center = Math.ceil(matrixSize / 2) - 1;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        // lines through the center vertically and horizontally
        if (j === center || i === center) {
          matrix[i][j] = asterisk;
        }
        // the diagonal line in the upper left quarter and in the lower right quarter
        if (j === i) {
          matrix[i][j] = asterisk;
        }
        // the diagonal line in the upper right quarter and in the lower left quarter
        if (j === (matrix.length - 1) - i) {
          matrix[i][j] = asterisk;
        }
      }
    }
    return matrix;
  }
}
