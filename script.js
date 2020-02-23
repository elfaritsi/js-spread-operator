/*Spread operator adalah sebuah fungsi baru dari modern javascript, yg berguna untuk
memecah iterables (array, object, string, dll) menjadi single element */

//untuk menyatukan setiap elemen menjadi string
const hardware = ['Processor', 'Motherboard', 'Power Supply'];
console.log(...hardware);

//berguna juga untuk memecah setiap karakter pada elemen array
console.log(...hardware[0]);


/*berguna untuk menggabungkan 2 buah array atau lebih*/
const siswa = ['Fikri', 'Husein', 'tanti'];
const guru = ['Franky', 'Badroel', 'Reza'];

//Sebenarnya ada 2 cara, cara pertama menggunakan higher order function dari array yaitu concat
const campur = siswa.concat(guru);
console.log(campur);
/*
cara kedua menggunakan spread operator, kelebihan menggunakan spread operator 
kita bisa menyelipkan/menambahkan index baru di tengah2 penggabungan, jika menggunakan 
concat tidak bisa*/
const campur2 = [...siswa,'Angga', ...guru];
console.log(campur2);


// berguna juga untuk meng-copy array
const mhs = ['Udin', 'Anto', 'Jamal'];
console.log(mhs);

/*
Jika kita meng-copy dengan cara diatas, maka jika kita ganti index ke 0 dengan 
nama lain maka array mhs yg kita copy tadi akan terganti juga index ke 0 nya,*/ 
let mhs1 = mhs;
mhs1[0] = 'Dobleh';
console.log(mhs1);
console.log(mhs);


/*dengan menggunakan spread operator maka jika kita mengganti array mhs2 dengan index ke 0
maka array utama yaitu mhs tidak akan berpengaruh apa2 karena dengan spread operator array mhs
benar2 ter-copy ke array mhs2*/
let mhs2 = [...mhs];
mhs2[0] = 'Siti';
console.log(mhs2);
console.log(mhs);

/*berguna juga untuk mengurai nodeList, nodeList adalah file yg kita ambil menggunakan DOM, dari file index
atau file lainnya
*/

let nama = document.querySelectorAll('.nama');

//kalau menggunakan foreach coding nya sebagai berikut tetapi hasilnya bukan array
nama.forEach(n => console.log(n.textContent));


/*menggunakan spread operator, otomatis jika kita buat [...nama] maka nodeList nama akan
berubah menjadi array, lalu kita looping menggunakan higher order function	yg ada pada array
yaitu map, maka hasilnya akan menjadi array
*/
const nama2 = [...nama].map(n => n.textContent);
console.log(nama2);

