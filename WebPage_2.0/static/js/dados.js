

//--------------------------------------------------------------------------------------------
Dados.geos = function(){
    let jsonGeos = new Object();
    let listGeos = [
        {"nome" : "CO", "server" : "ACSXP2", "ip" : "172.22.4.243"},
        {"nome" : "SPC", "server" : "ACSXP2", "ip" : "172.22.4.242"},
        {"nome" : "MG/ES", "server" : "ACSXP3", "ip" : "172.22.4.239"},
        {"nome" : "NE/BA", "server" : "ACSXP7", "ip" : "172.22.5.35" },
        {"nome" : "NO", "server" : "ACSXP8", "ip" : "172.22.4.248"},
        {"nome" : "RJ", "server" : "ACSXP8", "ip" : "172.22.4.246"},
        {"nome" : "PR/SPI", "server" : "ACSXP9", "ip" : "172.22.4.249"},
        {"nome" : "RS/SC", "server" : "ACSXP9", "ip" : "172.22.4.237"},
    ];
    jsonGeos = { "geos" : listGeos };
    return jsonGeos;
};


//--------------------------------------------------------------------------------------------
Dados.cdds = function getCDDS(){
    let jsonCDDS = new Object();
    jsonCDDS = Dados.geos();

    // --- CO ---
    var cddsGeo = [
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0710, "nome" : "CDD BRASILIA-XB"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0455, "nome" : "CDD CUIABA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0849, "nome" : "CDD MANAUS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0039, "nome" : "CDD BRASILIA-BR"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0454, "nome" : "CDD CAMPO GRANDE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0453, "nome" : "CDD GOIANIA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0572, "nome" : "CDC RIO BRANCO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0732, "nome" : "CDC FORMOSA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0761, "nome" : "CDD PORTO VELHO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0111, "nome" : "CDD RONDONOPOLIS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0191, "nome" : "CDC ARAGUAINA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0829, "nome" : "CDC TANGARA DA SERRA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0783, "nome" : "CDC CATALAO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0465, "nome" : "CDC COLIDER"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0435, "nome" : "CDC RIO VERDE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0448, "nome" : "CDC CACERES"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0077, "nome" : "CDC ITUMBIARA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0354, "nome" : "CDD CEBRASA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 057, "filial" : 0473, "nome" : "CDI MANAUS INT"},        
    ];
    jsonCDDS.geos[0].cdds = cddsGeo;

    // --- SP ---
    var cddsGeo = [
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0475, "nome" : "CDI LOUVEIRA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0401, "nome" : "CDD SAO PAULO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0404, "nome" : "CDI JACAREI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0204, "nome" : "CDD MOOCA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0216, "nome" : "CDD DIADEMA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0230, "nome" : "CDD CAMPINAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0764, "nome" : "CDD GUARULHOS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0214, "nome" : "CDD OESTE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0771, "nome" : "CDD NORTE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0970, "nome" : "CDD EMBU"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0231, "nome" : "CDD JUNDIAI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0137, "nome" : "CDD CENTRO SP"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0578, "nome" : "CDD PRAIA GRANDE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0966, "nome" : "CDD SAO JOSE CAMPOS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0242, "nome" : "CDD VOTORANTIM"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0968, "nome" : "CDL TAUBATE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0297, "nome" : "CDD SUZANO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0301, "nome" : "CDD MAUA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0303, "nome" : "CDD BARUERI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0379, "nome" : "CDI GUARULHOS INT"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0372, "nome" : "CDD JAGUARIÚNA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0484, "nome" : "CDD MOEMA"},        
    ];
    jsonCDDS.geos[1].cdds = cddsGeo;


    // --- MG ---
    var cddsGeo = [
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0095, "nome" : "CDD CONTAGEM"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0088, "nome" : "CDD UBERABA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0576, "nome" : "CDD UBERLANDIA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0438, "nome" : "CDD VIANA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0845, "nome" : "CDD POUSO ALEGRE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0820, "nome" : "CDD ALFENAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0835, "nome" : "CDD POÇOS DE CALDAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0986, "nome" : "CDD CACHOEIRO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0045, "nome" : "CDD IPATINGA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0541, "nome" : "CDL SANTA LUZIA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0723, "nome" : "CDL AS MINAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0186, "nome" : "CDD JOAO MONLEVADE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0189, "nome" : "CDD SETE LAGOAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0322, "nome" : "CDD VARGINHA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0374, "nome" : "CDD NOVA MINAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 088, "filial" : 0326, "nome" : "CDD WALS"},        
    ];
    jsonCDDS.geos[2].cdds = cddsGeo;


    // --- BA ---
    var cddsGeo = [
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0071, "nome" : "CDD SALVADOR"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0070, "nome" : "CDD ILHEUS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0135, "nome" : "CDD VIT DA CONQUISTA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0180, "nome" : "CDD FEIRA DE SANTANA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0141, "nome" : "CDD MACEIO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0581, "nome" : "CDD ARACAJU"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0546, "nome" : "CDD OLINDA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0598, "nome" : "CDD CARUARU"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0046, "nome" : "CDD LAPA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0052, "nome" : "CDD GUANAMBI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0069, "nome" : "CDD RIB DO POMBAL"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0146, "nome" : "CDD SALGUEIRO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0199, "nome" : "CDL JEQUIE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0729, "nome" : "CDL CABO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0809, "nome" : "CDC ARAPIRACA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0973, "nome" : "CDC EUNAPOLIS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0295, "nome" : "CDD BARREIRAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0346, "nome" : "CDL AS CAMACARI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0358, "nome" : "CDD PERNAMBUCO"},        
    ];
    jsonCDDS.geos[3].cdds = cddsGeo;


    // --- NO ---
    var cddsGeo = [
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0499, "nome" : "CDD FORTALEZA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0229, "nome" : "CDD BELEM"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0458, "nome" : "CDD NATAL"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0457, "nome" : "CDD JOAO PESSOA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0934, "nome" : "CDD CAMPINA GRANDE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0992, "nome" : "CDD EQUATORIAL"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0038, "nome" : "CDD ARACATI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0067, "nome" : "CDD SUL MARANHAO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0252, "nome" : "CDD ITAPIPOCA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0603, "nome" : "CDD IMPERATRIZ"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0843, "nome" : "CDS REDENCAO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0940, "nome" : "CDS SANTAREM"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0762, "nome" : "CDL CEARA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0964, "nome" : "CDL BALSAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0292, "nome" : "CDD MARABA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0368, "nome" : "CDD TERESINA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0352, "nome" : "CDD AQUIRAZ"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0477, "nome" : "CDI BELEM"},        
    ];
    jsonCDDS.geos[4].cdds = cddsGeo;


    // --- RJ ---
    var cddsGeo = [
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0036, "nome" : "CDD RIO DE JANEIRO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0724, "nome" : "CDD NITEROI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0538, "nome" : "CDD JACAREPAGUA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0575, "nome" : "CDD SAO CRISTOVAO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0539, "nome" : "CDD CAMPOS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0081, "nome" : "CDD VOLTA REDONDA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0061, "nome" : "CDD NOVA IGUACU"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0085, "nome" : "CDD NOVA FRIBURGO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0086, "nome" : "CDD PETROPOLIS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0495, "nome" : "CDL ITAPERUNA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0958, "nome" : "CDL PAVUNA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0389, "nome" : "CDI PIRAI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0471, "nome" : "CDI MACACU"},        
    ];
    jsonCDDS.geos[5].cdds = cddsGeo;


    // --- PR ---
    var cddsGeo = [
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0619, "nome" : "CDD CURITIBA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0112, "nome" : "CDD LONDRINA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0956, "nome" : "CDD RIBEIRAO PRETO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0944, "nome" : "CDD MOGI MIRIM"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0902, "nome" : "CDD AGUDOS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0763, "nome" : "CDD ARARAQUARA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0811, "nome" : "CDD ARACATUBA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0143, "nome" : "CDS FCO BELTRAO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0725, "nome" : "CDD PARANAGUA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0083, "nome" : "CDD BEBEDOURO"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0370, "nome" : "CDI PONTA GROSSA INT"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0543, "nome" : "CDD PRESID. PRUDENTE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0975, "nome" : "CDD PONTA GROSSA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0977, "nome" : "CDD JAU"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0209, "nome" : "CDD S J PINHAIS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0329, "nome" : "CDD FOZ DO IGUACU"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0395, "nome" : "CDD GUARAPUAVA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0348, "nome" : "CDD CASCAVEL"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0480, "nome" : "CDD PIRACICABA"},        
    ];
    jsonCDDS.geos[6].cdds = cddsGeo;


    // --- SU ---
    var cddsGeo = [
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0054, "nome" : "CDD SAPUCAIA DO SU"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0713, "nome" : "CDD PORTO ALEGRE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0118, "nome" : "CDD PELOTAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0050, "nome" : "CDD SAO JOSE"},
        {"empF" : 000, "filialF" : 0000, "emp" : 081, "filial" : 0366, "nome" : "CDI - SANTA CATARINA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0928, "nome" : "CDD BLUMENAU"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0926, "nome" : "CDD CAMBORIU"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0418, "nome" : "CDD STA CRUZ DO SUL"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0190, "nome" : "CDD STA MARIA"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0082, "nome" : "CDD GRAVATAI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0129, "nome" : "CDD CAXIAS"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0393, "nome" : "CDD ITAJAI"},
        {"empF" : 000, "filialF" : 0000, "emp" : 003, "filial" : 0469, "nome" : "CDD JOINVILLE"},        
    ];
    jsonCDDS.geos[7].cdds = cddsGeo;


    return jsonCDDS;
};