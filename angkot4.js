var jmlangkot = 10;
var angkotberoperasi = 6;


for (var noangkot = 1; noangkot <= jmlangkot; noangkot++) {
    if (noangkot <= 6) {
        console.log('Angkot No ' + noangkot + ' sedang beroperasi dengan baik');
    } // (||) simbol ini artinya atau dalam operator logika
    else if (noangkot === 8|| noangkot === 10) {
     console.log('Angkot No. ' + noangkot +' sedang lembur')   
    } else (
        console.log('Angkot No ' + noangkot + ' sedang tidak beroperasi')
    )

}