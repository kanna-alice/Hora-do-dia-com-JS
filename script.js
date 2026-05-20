function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${horas} horas, ${minutos} minutos e ${segundos} segundos.`
    if (horas >= 0 && horas < 12) {
        // BOM DIA!
        img.src = 'https://i.pinimg.com/736x/cf/c2/67/cfc2676910acb21d80a3af400e368bc4.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (horas >= 12 && horas < 18) {
        // BOA TARDE!
        img.src = 'https://i.pinimg.com/736x/42/06/a5/4206a5d0ca0f8e7fe6d204c719d88425.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'https://i.pinimg.com/736x/dc/ef/47/dcef47dc4ee8563fc21a39712a49d772.jpg'
        document.body.style.background = '#515154'
    }

}