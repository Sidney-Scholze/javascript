let num = [5, 8, 9, 3, 7, 1]
console.log(`Nosso vetor é ${num}`)
//num.sort()
num[6] = 2 // Adiciona na posição 6 começando da posição 0
//num.push(30) // Adiciona na última posição
/*
for(let i = 0; i < num.length; i++){
    console.log(num[i])
}
*/
for(let pos in num){
    console.log(num[pos])
}

 
console.log(`O tamanho do vetor é ${num.length}`)
//console.log(`Em ordem crescente ${num.sort()}`)
console.log(`O valor 7 no array está na posição ${num.indexOf(7)} `)
console.log('------')
console.log(num)
console.log(typeof(num))
