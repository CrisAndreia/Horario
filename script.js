function carregar(){
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  //var hora = data.getHours()
  var hora = 19

  msg.innerHTML = `Agora são ${hora} horas.`

  if(hora >=0 && hora<12){
    //Bom dia
    img.src = "./img/manha.png"
    document.body.style.background = '#afb47c'
  } else if(hora >=12 && hora <18){
    //Boa tarde
    img.src = "./img/tarde.png"
    document.body.style.background = '#efb979'
  } else {
    //Boa noite
    img.src = "./img/noite.png"
    document.body.style.background = '#404a8f'
  }
}


