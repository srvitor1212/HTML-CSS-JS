

//--------------------------------------------------------------------------------------------
js.index = function(){
    let CDD = Dados.cdds();
    let tela = js.InicializarTela();
    let qtGeo = 0;

    for (let x in CDD.geos){
        let table = document.createElement('table');
        let divCaption = document.createElement('div');
        let thead = document.createElement('thead');
        let th = document.createElement('th');
        let tbody = document.createElement('tbody');
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let a = document.createElement('a');
        let label = document.createElement('label');

        // Cabeçalho GEO
        a.href = "http://" + CDD.geos[x].ip;
        a.target = "_blank"
        a.className = "a-link"
        label.innerHTML = CDD.geos[x].nome +"</br>"+ CDD.geos[x].server;
        divCaption.innerHTML = label.outerHTML;
        divCaption.className = "link-geo"
        a.innerHTML = divCaption.outerHTML;
        table.innerHTML = a.outerHTML;

        // Cabeçalho table
        th.innerHTML = "Empresa";
        tr.innerHTML += th.outerHTML;

        th.innerHTML = "Filial";
        tr.innerHTML += th.outerHTML;

        th.innerHTML = "Nome";
        tr.innerHTML += th.outerHTML;
        thead.innerHTML = tr.outerHTML;

        table.innerHTML += thead.outerHTML;

        // CDDs
        for (let y in CDD.geos[x].cdds){
            tr.innerHTML = "";

            td.innerHTML = CDD.geos[x].cdds[y].emp;
            tr.innerHTML += td.outerHTML;

            td.innerHTML = CDD.geos[x].cdds[y].filial;
            tr.innerHTML += td.outerHTML;

            td.innerHTML = CDD.geos[x].cdds[y].nome;
            tr.innerHTML += td.outerHTML;

            tbody.innerHTML += tr.outerHTML;
        };
        table.innerHTML += tbody.outerHTML;
        if(qtGeo == 4){ qtGeo = 0; }
        tela.children[qtGeo].innerHTML += table.outerHTML;
        qtGeo++;
    };
};


//--------------------------------------------------------------------------------------------
js.aceite = function(){
    let tela = js.InicializarTela();
};


//--------------------------------------------------------------------------------------------
js.senha = function(){
    let tela = js.InicializarTela();
};

//--------------------------------------------------------------------------------------------
(function(){
    js.index();  
})();