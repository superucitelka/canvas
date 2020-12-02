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
   },

   /* Změna velikosti čtverce */
   resize: function() {
      this.size = (this.size < 250) ? this.size + 1 : 0;
   }   
}

/* Proměnná pro uložení animačního cyklu */
let req;

/* Funkce provádějící animaci */
function animate() {
   /* Vyčištění plátna */
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   /* Změna velikosti objektu */
   square.resize();
   /* Vykreslení objektu */
   square.paint();
   /* Vyvolání dalšího snímku animace */
   req = window.requestAnimationFrame(animate);
}

/* Spuštění animace po kliknutí na tlačítko Start */
document.getElementById('start').addEventListener('click', function() {
   window.requestAnimationFrame(animate);
});

/* Zastavení animace po kliknutí na tlačítko Stop */
document.getElementById('stop').addEventListener('click', function() {
   window.cancelAnimationFrame(req);
});
