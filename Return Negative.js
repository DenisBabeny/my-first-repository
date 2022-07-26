//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// преобразовать неизвестное число в положительно, при учете, что оно может быть отрицательным, тогда просто выводим его

function makeNegative(num) {
    if (num>0){
      return num = num - num * 2;
    } else {
      return num;
    }
  }