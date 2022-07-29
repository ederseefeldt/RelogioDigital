setInterval(() => { // O setInterval irá fazer o relógio ficar atualizando seu horário no momento em que uma mudança de H, M ou S
    // Variáveis que guardam os ID's
    let horas = document.querySelector('#horas')
    let minutos = document.querySelector('#minutos')
    let segundos = document.querySelector('#segundos')

    //----------------------------------------------------------------//

    // Variáveis reponsáveis por pegar o horário atual
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    //----------------------------------------------------------------//

    // Adiciona um 0 antes do número que for menor que 10
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    //----------------------------------------------------------------//
    
    // O innerHTML atualizará o valor dos ID's de acordo com o que as variáveis recebem em tempo real
    horas.innerHTML = h
    minutos.innerHTML = m
    segundos.innerHTML = s

    //----------------------------------------------------------------//

    // Variáveis que pegam os ID's que fazem a animação do círculo
    let hh = document.querySelector('#hh')
    let mm = document.querySelector('#mm')
    let ss = document.querySelector('#ss')

    hh.style.strokeDashoffset = 565 - (565 * h) / 24 // Calcula a posição das horas no círculo
    mm.style.strokeDashoffset = 565 - (565 * m) / 60 // Calcula a posição dos minutos no círculo
    ss.style.strokeDashoffset = 565 - (565 * s) / 60 // Calcula a posição dos segundos no círculo

    //----------------------------------------------------------------//

    // Variáveis que pegam o ponto que vai percorrer o círculo
    let pontoHoras = document.querySelector('.ponto-horas')
    let pontoMinutos = document.querySelector('.ponto-minutos')
    let pontoSegundos = document.querySelector('.ponto-segundos')

    // Aqui será feito cálculo que irá fazer o ponto se movimentar pelos 360 graus do circulo
    pontoHoras.style.transform = `rotate(${h * 15}deg)` // ((360° / 24) = 15)
    pontoMinutos.style.transform = `rotate(${m * 6}deg)` // ((360° / 60) = 6) 
    pontoSegundos.style.transform = `rotate(${s * 6}deg)` // ((360° / 24) = 6)
})