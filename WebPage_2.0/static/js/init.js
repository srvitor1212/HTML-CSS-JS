

//--------------------------------------------------------------------------------------------
// Importando Vanilla-JS

const VanillaJS = new Object();
let Dados = new Object();
VanillaJS.url = function(){ alert('http://vanilla-js.com/'); };

let js = VanillaJS;
js.content = document.getElementById('div-main');



//--------------------------------------------------------------------------------------------
// Opções globais

js.InicializarTela = function(){
    for(i in js.content.children){
        js.content.children[i].innerHTML = "";
    };
    return js.content
};

//--------------------------------------------------
js.cookieHabilitado = function(){
    try{
        if(navigator.cookieEnabled == true){
            return true;
        } else {
            alert("Habilite os cookies dessa página! :)");
            return false;
        };
    } catch(e) { 
        alert("Erro ao verificar cookies! > " + e);
        return false;
    };
};

//--------------------------------------------------
js.setCookie = function(name, value){
    let expireDays = 300;
    const d = new Date();
    d.setTime(d.getTime() + (expireDays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();

    let cookie = name + "=" + value + ";" + expires + ";";
    //let cookie = name + "=" + value + ";";
    console.log('str cookie');
    console.log(cookie);

    document.cookie = cookie;
    console.log('COOKIE setado');
    console.log(document.cookie);
};

//--------------------------------------------------
js.getCookie = function(){

};
//--------------------------------------------------------------------------------------------
(function(){
    let cookies = js.cookieHabilitado();
    if (cookies){
        js.setCookie("pg", "index");
    };
})();



//--------------------------------------------------------------------------------------------
//      Anotações
// Arquivo promax com CDDS = WCF26800.cpy
// URL retorna unidades = http://172.22.5.174/cgi-bin/PP00100.exe?ppopcao=55&requisicao=78