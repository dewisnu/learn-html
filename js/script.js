var s = '';

for (var i = 10; i > 0; i--){
    for (var j = 0; j < i; j++) {
        s += '*';
        
    }
   s += '\n';
}
console.log(s);

//loop pertama
//10 lebih besar dari 0 = true 
//kemudian masuk ke loop ke dua
// 1)0=j lebih kecil dari 10 = true 
//cetak *  
//2)masih di loop ke dua ( karena loop nya masih true )
//var j + 1 = 1 ; 1 lebih kecil dari 10 = true 
//*+* =  cetak **
//ulangi langkah  2 terus sampai nilainya false
//..
//masih di loop ke dua ( karena loop nya masih bernilai  true)
//var j=10 + 1 = 11 ; 11 lebih kecil dari 10 = false (karena false looop kedua tidak dikerjaakan)
//keluar dari loop kedua 
// cetak baris baru / (\n)
//(var j)reset nilai
//kemudian kembali ke loop pertama 
// i=10--/ i=10 - 1 = 9; 9 lebih besar dari 0 = true 
//kemudian masuk ke loop ke dua 
// 0=j lebih kecil dari 9 = true 
//cetak (*)
//1)var j +1 =1 ; 1 lebih kecil dari 9 =true
//*+* = cetak (**)
//ulangi terus langkah 1 sampai nilainya false
//..
//var j=9 + 1 = 10; 10 lebih kecil dari 9 = false ;karena nilanya false keluar dari loop kedua
//cetak baris baru /(\n)
//ulangi terus kondisi var j sampai nilai false
//..
//i=1-- /i=1 -1 =0/ 0 lebih besar dari 0 = false ;karena false loop berhenti 