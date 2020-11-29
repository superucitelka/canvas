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

/***************************************************************/
/* 5. Kreslení polygonu - trojúhelníku  */
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(350, 175);
ctx.lineTo(200, 175);
/* Uzavření cesty (zde je uzavřen trojúhelník) */
ctx.closePath();
/* Zaoblení rohů */
ctx.lineJoin = 'round';
ctx.stroke();
/* Vyplnění uzavřeného trojúhelníku zelenou barvou */
/* Nastavení výplně */
ctx.fillStyle = 'green';
/* Aplikace výplně v uzavřené ploše */
ctx.fill();

/* Obnovení nastavení plné čáry bez vzorku */
ctx.setLineDash([]);

/***************************************************************/
/* 6. Kreslení Beziérovy křivky */
ctx.beginPath();
/* Nastavení počátečního bodu */
ctx.moveTo(200, 200);
/* Vytvoření Beziérovy křivky:
 * cp1x, cp1y - souřadnice prvního kontrolního bodu 
 * cp2x, cp2y - souřadnice druhého kontrolního bodu 
 * x, y       - souřadnice konečného bodu
 */
ctx.bezierCurveTo(200, 280, 275, 250, 350, 200);
ctx.closePath();
ctx.stroke();

/***************************************************************/
/* 7. Kreslení kvadratické křivky */
ctx.beginPath();
/* Nastavení počátečního bodu */
ctx.moveTo(200, 250);
/* Vytvoření kvadratické křivky:
 * cpx, cpy - souřadnice kontrolního bodu 
 * x, y       - souřadnice konečného bodu
 */
ctx.quadraticCurveTo(275, 300, 350, 250);
/* Přenastavení barvy a tloušťky čáry */
ctx.strokeStyle = 'gray';
ctx.lineWidth = 1;
ctx.stroke();