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
 

// -------------------------- 2 --------------------------
/*
const ism = prompt("Ism kiriting");

const ismlar = ['Azizbek', 'Shuhrat', 'Foziljon'];

if(ismlar.includes(ism)) {
    alert(`Ha ${ism} bor`);
} else {
    alert(`Afsus ${ism} yuq`);
}
*/


// -------------------------- 3 --------------------------

// const ismlar = ['Aziz', 'Shuhrat', 'Fozil'];

// for / while => loop 

/* 
for (let i = 0; i < ismlar.length; i++) {
    let result = ismlar[i] + 'bek'
    console.log(result);
}
*/

/*
let i = 0;

while (i < ismlar.length) {
    let result = ismlar[i] + 'bek'
    console.log(result);
    i++
}
*/


// -------------------------- 4 --------------------------
/*
const viloyatNomi = prompt("Qaysi viloyat kerak?");

 switch (viloyatNomi) {
    case "Farg'ona":
        alert("Farg'ona viloyatida 2 mln aholi bor");
        break;
    case "Andijon":
        alert("Andijon viloyatida 1.5 mln aholi bor");
        break;
    case "Namangan":
        alert("Namangan viloyatida 2.5 mln aholi bor");
        break;
    default:
        alert(`Hozircha bazida ${viloyatNomi} viloyati mavjud emas.`);
 }
*/


// -------------------------- 5 --------------------------
const belgilar = prompt("Nimadir yozing...");

let meyor = 20;

if (belgilar.length > meyor) {
    alert(
        `Siz ${meyor} ta belgi kiritishingiz mumkin edi, lekin hozirda siz ${belgilar.length} ta belgi kiritdingiz. Bu meyoridan ${belgilar.length - meyor} ta ko'p.`
    );
} else{
    alert(
        `Siz ${meyor} ta belgi kiritishingiz mumkin va hozirda siz ${belgilar.length} ta belgi kiritdingiz. Yana ${meyor - belgilar.length} ta belgi kiritishingiz mumkin.`
    );
}