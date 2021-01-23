let a = 1
let b = 0

for(let i = 1; i <= 15; i++){
    let c = a    
    a = (b + a)
    b = c
    
    console.log(`c = ${c} `)
}
