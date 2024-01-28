//1-misol
//Kubning yon uzunligi berilgan hajmni hisoblaydigan funksiyani yozing.
// {
//     function res1(N) {
//         return N ** 3  
//     }
//     console.log(res1(2));
// }
//3-misol
//Massivdagi birinchi N natural sonni qaytaruvchi funksiya yarating.
// {
//  function arr (a, n, s, d) {
//         let sum = 0;
//         let counter = 0;
//         let res = ``;
//     for (let i = 0 ; i < arr.length; i++) {
//         sum += arr[i];
//         counter++;
//         res = arr[i] / counter
//         return res, n;
//     }
//     }
//     console.log(arr(1, 8, 5, 10));
// }
//4-miol
//Sondagi raqamlar yig‘indisini hisoblaydigan funksiya ishlab chiqing.
// {
//     function res4(n) {
//     let sum = 0;
//     for (let i = 0; n; i++) {
//         sum += n % 10;
//         n = Math.trunc(n / 10);
//     }
//     return sum;
//   }

//   const n = 12586;
//   console.log(res4(n));
// }
//5-miol
// Yilning kabisa yili ekanligini tekshiradigan funksiyani aniqlang.
// {
//     function res5(n) {
//         let res = ``;
//         if (n % 4 == 0 && n % 100 != 0) {
//            res = `kabisa yili`;
//         } else {
//             res = `kabisa yil emas`;
//         }
//         return res;
//     }
//     console.log(res5(2023))
// }
//6-miol
// Belgilangan ikkita qiymat orasida tasodifiy son hosil qiluvchi funksiya yarating.
// {
//     function res6 (a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             sum = Math.trunc(Math.random(i) * b);
//         }
//     }
//     for (let i = b; i <= a; i++) {
//         if (i % 2 == 0) {
//             sum = Math.trunc(Math.random(i) * a);
//         }
//     }
//     return sum;
// }
// console.log(res6(20, 80));
// }
//10-miol
//Ikki sonning minimalini topuvchi funksiya ishlab chiqing.
// {
//     function res10 (a, b) {
//         let res = ``;
//         if (a > b) {
//             res = a;
//         } else {
//             res = b;
//         }
//         return res;
//     }
//     console.log(res10(52, 51));
// }
//18-miol
//Belgilangan ikkita qiymat orasida tasodifiy juft son hosil qiluvchi funksiya yarating.
// {
//     function res6 (a, b) {
//         let sum = 0;
//         for (let i = a; i <= b; i++) {
//             if (i % 2 == 0) {
//                 sum = Math.trunc(Math.random(i) * b);
//             }
//         }
//         for (let i = b; i <= a; i++) {
//             if (i % 2 == 0) {
//                 sum = Math.trunc(Math.random(i) * a);
//             }
//         }
//         return sum;
//     }
//     console.log(res6(20, 80));
// }
//20-miol
//Satrning haqiqiy telefon raqami ekanligini tekshiradigan funksiyani aniqlang (asosiy formatni tekshirish
// {
//     function res20 (tel) {
//         let res =``;
//         if (tel.lenght <= 9) {
//             res = `raqamlar togri`
//         } else {
//             res = `raqam notog'ri`
//         }
//         return res;
//     }
//     console.log(res20(88260813));
// }