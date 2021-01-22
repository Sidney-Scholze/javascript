function carregar(){
    let msg = window.document.getElementById('msg')
    let msg2 = window.document.getElementById('msg2')
    let img = window.document.getElementById('imagem')
    let dada = new Date()
    let hora = dada.getHours()
    let minutos = dada.getMinutes()
    msg.innerHTML= `Agora são ${hora} hora(s) e ${minutos} minuto(s).`
    
    if (hora >= 6 && hora < 12){
        img.src = 'imagens/fotomanha.png'//bom dia
        document.body.style.background = '#feed74'
        msg2.innerText ='Bom dia !'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/fototarde.png'//boa tarde
        document.body.style.background ='#ffb95b'
        msg2.innerText = 'Boa Tarde !'
    }else if (hora >= 18){
        img.src = 'imagens/fotonoite.png'//boa noite
        document.body.style.background ='#323232'
        msg2.innerText = 'Boa Noite !'
    }else{
        img.src = 'imagens/fotonoite.png'//boa madrugada
        msg2.innerText = 'Boa Madrugada !'
        document.body.style.background = 'black'
    }
}