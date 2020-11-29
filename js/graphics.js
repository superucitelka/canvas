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

/***************************************************************/
/* 3. Kreslení plné čáry */
/* Začátek cesty */
ctx.beginPath();
ctx.strokeStyle = 'blue';
/* Nastavení tloušťky čáry */
ctx.lineWidth = 10;
/* Nastavení zakončení čáry */
ctx.lineCap = 'square';
/* Přesun do konkrétního bodu plátna */
ctx.moveTo(200, 20);
/* Nakreslení čáry z počátečního bodu do bodu x, y */
ctx.lineTo(350, 20);
/* Vykreslení obrysu - cesty */
ctx.stroke();

/***************************************************************/
/* 4. Kreslení čáry se vzorem */
/* Začátek nové cesty vykreslování */
ctx.beginPath();
/* Oblé zakončení čáry */
ctx.lineCap = 'round';
/* Vzor čáry [délka, mezera, délka, mezera, ...] */
ctx.setLineDash([10, 15, 2, 15]);
ctx.moveTo(200, 50);
ctx.lineTo(350, 50);
ctx.stroke();