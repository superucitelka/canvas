/* Konstanta canvas odkazuje na objekt plátna */
const canvas = document.getElementById('canvas');
/* Konstanta ctx odkazuje na grafický kontext plátna; 
   umožňuje používat různé grafické atributy a metody. */
const ctx = canvas.getContext('2d');

/***************************************************************/
/* 1. Kreslení vyplněných obdélníků */
/* V atributu fillStyle je nastavena barva výplně */ 
ctx.fillStyle = '#FF0000';
/* Vykreslí obdélník s danou výplní a s parametry (pozice x, pozice y, šířka, výška) */
ctx.fillRect(0, 0, 150, 75);
/* Je možné použít nejen plnou barvu (rgb), ale i barvu s průhledností (rgba). */
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx.fillRect(0, 100, 150, 75);

/***************************************************************/
/* 2. Kreslení obrysu obdélníka/čtverce */
/* Nastavení barvy obrysu */
ctx.strokeStyle = 'black';
/* Vykreslení obdélníku (čtverce) pomocí obrysu */
ctx.strokeRect(40, 200, 70, 70);
