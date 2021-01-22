function verificar(){
    let data = new Date()
    let ano = data.getUTCFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value <= 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')

    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero =''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 10){
                img.setAttribute('src', 'imagens/criancam.png')//criança
            }else if (idade < 21){
                img.setAttribute('src','imagens/jovemm.png')//jovem
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/adultom.png')//adulto
            }else{
                img.setAttribute('src','imagens/idosom.png')//idoso
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade < 10){
                img.setAttribute('src','imagens/criancaf.png')//criança
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemf.png')//jovem
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/adultof.png')//adulto
            }else{
                img.setAttribute('src','imagens/idosof.png')//idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}