/*1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.*/

for (let i = 0; i < 10; i++) {
  console.log(i)
}

/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/
for (let j = 0; j < 10; j++) {
  if (j % 2 === 0) {
    console.log(j)
  }
}
/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.*/

for (let x = 0; x < 10; x++) {
  console.log('Intentando dormir 🐑')
  if (x === 9) {
    console.log('Dormido!')
  }
}