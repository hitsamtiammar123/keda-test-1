/*
  3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false
*/

function soal3Function(str){
  let reverseStr = '';
  for(let i = str.length - 1; i >= 0; i--){
    reverseStr += str[i]
  }
  if(str === reverseStr){
    return true
  }
  return false
}


module.exports = soal3Function;
