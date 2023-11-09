function create2DArray(N) {
    let array = [];
    for (let i = 0; i < N; i++) {
      array.push(new Array(N));
      for (let j = 0; j < N; j++) {
        array[i][j] = 0;
      }
    }
    return array;
  }
  
  function fillSpiral(N) {
      let value = 1;
      let mat = create2DArray(N);
      let k = 0, l = 0;
      let lastRow = N - 1, lastCol = N - 1;
      
      while (k <= lastRow && l <= lastCol) {
          for (let i = l; i <= lastCol; ++i) mat[k][i] = value++;
          k++;
          for (let i = k; i <= lastRow; ++i) mat[i][lastCol] = value++;
          lastCol--;
          if (k <= lastRow) {
              for (let i = lastCol; i >= l; --i) mat[lastRow][i] = value++;
              lastRow--;
          }
          if (l <= lastCol) {
              for (let i = lastRow; i >= k; --i) mat[i][l] = value++;
              l++;
          }
      }
      
      return mat;
  }
  
  function printMatrix(mat) {
      mat.forEach(row => {
          console.log(row.join(' ').replace(/0/g, ' 0'));
      });
  }
  
  // Exemple pour une matrice 4x4
  let N = 4;
  let matrix = fillSpiral(N);
  printMatrix(matrix);
  