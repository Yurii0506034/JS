let a = "background-color: #00ffff; color: #ff00ff;";
a += "font-size: 24pt; font-family: 'Times New Roman';";

let naim = 'Мережа магазинів "ВСЕ ДЛЯ БУДИНКУ"';
let da = new Date();
let d = da.getDate() + "." + (da.getMonth() + 1) + "." + da.getFullYear();

document.write('<p align="center" style="' + a + '">' + naim + '</p>');
document.write('<p align="center">Сьогодні: ' + d + '</p>');
