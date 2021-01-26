var adicionaNumero = []
function adicionar(){
    
    let num = document.getElementById('txtn')
    let tab = document.getElementById('res')   
    let n = Number(num.value)
 
    if(!num.value || n < 1 || n > 100){
        alert('Verifique os dados')       
  
    }
    else{    
        for(let i in adicionaNumero){
            if(n == adicionaNumero[i]){
                alert(`O número ${n} já existe no array. Por favor, digite outro valor.`)
                return
            }
        }
        adicionaNumero.push(n);
        item=document.createElement('option')
        item.value = adicionaNumero.length;//atribui um ID para cada elemento, no caso, a ordem em que ele apareceu.
        item.text = `Número digitado: ${n}`          
        tab.appendChild(item)     
    }      
    num.value =''
    num.focus()
}

