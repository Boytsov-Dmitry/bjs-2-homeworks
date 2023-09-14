function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    };
  
    if (arr[i] < min) {
      min = arr[i];
    };

    sum += arr[i];
  }
  
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

getArrayParams(-99, 99, 10)





function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (arr.length == 0) {
    sum = 0;
  };

  return sum
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    };

    if (arr[i] < min) {
      min = arr[i];
    };
  }
  difference = max - min;

  if (arr.length == 0) {
    difference = 0;
  };

  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  difference = sumEvenElement - sumOddElement;

  if (arr.length == 0) {
    difference = 0;
  }

  return difference;
}

differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)

function averageEvenElementsWorker(...arr) {
  sumEvenElement = 0;
  countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  finalResult = sumEvenElement / countEvenElement;

  if (arr.length == 0) {
    finalResult = 0;
  }

  return finalResult;
}

function makeWork (arrOfArr, func) {
  maxWorkerResult = -Infinity;
  arrNew = [];

  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);

    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
    arrNew.push(maxWorkerResult);
    maxWorkerResult = -Infinity;
  }


  finalResult = Math.max(...arrNew);

  return finalResult
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
makeWork(arr, differenceMaxMinWorker);
