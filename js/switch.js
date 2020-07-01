var angka = parseInt(prompt('masukan angka'));

switch (angka) {
    case 1 :
        alert('anda memasukan angka 1')
        break;
    case 3 :
        alert('anda memasukan angka 2')
        break;
    case 2 :
        alert('anda memasukan angka 3')
        break;


    default:
        alert('anda tidak memasukan angka')
        break;
}

var angka = prompt('masukan keyword makanan yang ingin kalian ketahui sehat atau tidak nya makanan itu');

switch (angka) {
    case 'roti':
        alert('makanan sehat')
    case 'daging':
        alert('makanan sehat')
        break;    
    case hamburger:
        alert('makanan tidak sehat')
    case hotdog:
        alert('makanan tidak sehat')
        break;

   

    default:
        alert('anda tidak memasukan keyword makanan')
        break;
}