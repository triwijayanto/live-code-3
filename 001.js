/**
================================
Array Mastery: Add Evens and Odds
================================

[INSTRUKSI]

Function addEvenOdd akan menerima satu parameter berupa array of number. Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan return array 2 dimensi di mana array pertama merupakan hasil penjumlahan angka ganjil dan array selanjutnya adalah hasil penjumlahan angka genap

Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]

input: [2, 4, 6, 10]
output: [[0], [22]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode atau algorithma. Tidak ada pseudocode atau algorithma / pseudocode atau algorithma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/

function addEvenOdd (arrNum) {
  var ganjil = 0
  var genap = 0
  for(var i = 0 ; i < arrNum.length ; i++){
    //console.log(arrNum[i])
    if(arrNum[i]%2!==0){
      ganjil += arrNum[i]
    } else {
      genap += arrNum[i]
    }
  }
  return [[ganjil],[genap]]
}
  
console.log(addEvenOdd([3, 5, 7, 8])); // [ [15], [8] ]
console.log(addEvenOdd([2, 4, 6, 10])); // [ [0], [22] ]
console.log(addEvenOdd([])); // [ [0], [0] ]