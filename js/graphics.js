/* Konstanta canvas odkazuje na objekt plátna */
const canvas = document.getElementById('canvas');
/* Konstanta ctx odkazuje na grafický kontext plátna; 
   umožňuje používat různé grafické atributy a metody. */
const ctx = canvas.getContext('2d');

/* Objekt čtverce */
let square = {
   /* Délka strany */
   size: 100,
   /* Pozice - souřadnice lehého horního rohu */
   x: canvas.width / 2 - 50,
   y: canvas.height / 2 - 50,
   /* Barva výplně */
   color: 'red',

   /* Vykreslovací funkce */
   paint: function() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size);      
   }
}

/* Vykreslení objektu */
square.paint();