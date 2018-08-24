/*
=============
UNIQUE FINDER
=============
Name :_____________

[INSTRUCTIONS]
uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.
Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.
[CONSTRAINTS]
Tidak ada batasan untuk soal ini.
[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function uniqueFinder(sentence) {
  //handle string kosong
  if(sentence.length < 1){
    return "'NO WORDS'"
  }
  
  //split dengan cara looping
  var lowerCase = sentence.toLowerCase()
  var arrayKosong = []
  var stringKosong = ''

  for (var i = 0; i <sentence.length; i++){
    // stringKosong += lowerCase[i]
    if(lowerCase[i]===' '){
      arrayKosong.push(stringKosong)
      stringKosong = ''
    } else if (i === sentence.length-1) {
      stringKosong += lowerCase[i]
      arrayKosong.push(stringKosong)
    } else {
      stringKosong += lowerCase[i]
    }
  }
  // cari yang unik dengan object
  var unik = {}
  for(var j = 0 ; j < arrayKosong.length ; j++){
    unik[arrayKosong[j]] = 0
  }

  var key = Object.keys(unik)
  
  
  //console.log(stringKosong)
  return key
}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS
// 
// 1. buat variable penampung `array` kosong
// 2. buat variabel `string` kosong
// 3. looping `sentence` dari 0 - ujung
// 4. jika ketemu spasi, maka akan aku push `string` , lalu `string` menjadi kosong lagi
// 5. jika index looping udah sampe ujung maka
// - `string` ditambah char[i]
// - `string` di push ke array
// 6. selain itu, `string` ditambah char[i]
// 7. Looping selesai (edited)