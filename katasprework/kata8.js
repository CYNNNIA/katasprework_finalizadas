/*Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
}*/

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let findLongestWord = param[0]
  for (let i = 1; i < param.length; i++) {
    if (param[i].length > findLongestWord.length) {
      longestWord = param[i]
    }
  }
  return longestWord
}
findLongestWord(avengers)
console.log(findLongestWord(avengers))
