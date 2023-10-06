//$(seletor).ação();

$(document).ready(function(){ //Quando o documento já foi carregado
    
    $('#esconder').click(function(){
       $('h1').hide();
    });
    
    
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('#mensagem')
            .text("Clicou")
            .css("color", "blue");
    });
    
    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('#mensagem')
            .text("Click red")
            .css({color:'red', border:'1px solid red'})
            .addClass('green');
    });
    
});