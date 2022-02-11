$(function(){   
    var nav = $('#menuHeader');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 150) { 
            nav.addClass("menu-fixo");
        } else { 
            nav.removeClass("menu-fixo"); 
        } 
    });  
});
document.querySelector('#kiwi').addEventListener('click',()=>{
    let menu = document.querySelector('#menu')
    if(menu.className === 'esconde'){
        menu.className = 'mostra'
    }else{
        menu.className = 'esconde'
    }
})