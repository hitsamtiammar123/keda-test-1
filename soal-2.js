/*
  2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
*/

function soal2Function(arr){
  let temp = -1
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      }
    }
  }
  return arr;
}

// console.log(soal2Function([2,4,8,1,0,19]))
module.exports = soal2Function;