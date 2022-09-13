/*
  1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" 
  jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", 
  cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

*/

function soal1Function(num){
  for(let i = 1; i <= num; i++){
    let str = ''
    if(i % 3 === 0){
      str += 'fish '
    }if(i % 5 === 0){
      str += 'bash'
    }
    console.log(i + ' -> ' + str)
  }
}

module.exports = soal1Function;