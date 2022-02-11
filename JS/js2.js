$(function(){   
    var nav = $('#menuHeader')   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 150) { 
            nav.addClass("menu-fixo")
        } else { 
            nav.removeClass("menu-fixo") 
        } 
    })  
})
document.querySelector('#kiwi').addEventListener('click',()=>{
    let menu = document.querySelector('#menu')
    if(menu.className === 'esconde'){
        menu.className = 'mostra'
    }else{
        menu.className = 'esconde'
    }
})

document.querySelector('#botao').addEventListener('click',()=>{
    let cep = document.querySelector('#cep').value

    let rua = document.querySelector('#rua')
    let bairro = document.querySelector('#bairro')
    let cidade = document.querySelector('#cidade')
    let uf = document.querySelector('#uf')

    let url = "http://viacep.com.br/ws/"+cep+"/json/"
    //alert(url)

    let ajax = new XMLHttpRequest
    ajax.onreadystatechange = ()=>{
      if(ajax.readyState=4){
        var resp = JSON.parse(ajax.responseText)
        //alert(resp.logradouro)
        rua.value = resp.logradouro
        bairro.value = resp.bairro
        cidade.value = resp.localidade
        uf.value = resp.uf
      }
    }
    ajax.open("GET",url,true)
    ajax.send()
})