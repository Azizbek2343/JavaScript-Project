// -------------------------- 1 --------------------------
/*
const ism = prompt("Ismingizni kiriting:");
const yosh = +prompt("Yoshingizni kiriting:");

let tugilganYil = 2026 - yosh
let oy = yosh * 12
let hafta = ((yosh * 365) / 7).toFixed(0)
let kun = yosh * 365
let soat = kun * 24
let daqiqa = soat * 60
let soniya = daqiqa * 60

const result = `Qadrli ${ism}. Siz ${tugilganYil} tug'ilgansiz. Va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagansiz.`

alert (result);
*/

const ism = prompt("Ism kiriting");

const ismlar = [Azizbek, Shuhrat, Foziljon];

if(ismlar.includes(ism)) {
    alert(`Ha ${ism} bor`);
} else{
    alert(`Afsus ${ism} yuq`);
}