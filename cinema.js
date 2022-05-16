const catalogo = require('./database/catalogo')

let cinema = 'loja'

//console.log(cinema)

/*let catalogo = [
    {codigo: 1, titulo: "Doutor Estranho no Multiverso da Loucura", duracao: 2.1, atores: ["Benedict Cumberbatch","Elizabeth Olsen", "Xochitl Gomez", "Bruce Campbell"], anoDeLancamento: 2022, emCartaz: true},
    {codigo: 2, titulo: "Zohan: Um agente bom de corte", duracao: 2, atores: ["Adam Sandler","John Turturro","Emmanuelle Chriqui"], anoDeLancamento: 2008, emCartaz: false },
]

//console.log(catalogo)

//INSERE FILME----------------------

catalogo.push({codigo: 3, titulo: "Roma", duracao: 2.2, atores: ["Yalitza Aparicio","Marina de Tavira","Jorge Antonio Guerrero"], anoDeLancamento: 2018, emCartaz: false})

//console.log(catalogo.length)

//console.log(catalogo)*/

function buscarFilmePeloCodigo(codigoDoFilme){
    catalogo.map(
        function (filme){
            if (filme.codigo == codigoDoFilme){
                console.log(filme.titulo)
            } 
        }
    )
}

buscarFilmePeloCodigo(1)


//ALTERA STATUS FILME--------------------


function alteraStatus(codigoDoFilme){
    catalogo.map(
        function (filme){
            if (filme.codigo == codigoDoFilme){
                console.log(!filme.emCartaz)
            }
        }
    )
}

alteraStatus(2)




/*transformando o catalogo em stringify


let catalogo = [
    {codigo: 1, titulo: "Doutor Estranho no Multiverso da Loucura", duracao: 2.1, atores: ["Benedict Cumberbatch","Elizabeth Olsen", "Xochitl Gomez", "Bruce Campbell"], anoDeLancamento: 2022, emCartaz: true},
    {codigo: 2, titulo: "Zohan: Um agente bom de corte", duracao: 2, atores: ["Adam Sandler","John Turturro","Emmanuelle Chriqui"], anoDeLancamento: 2008, emCartaz: false },
]

catalogo.push({codigo: 3, titulo: "Roma", duracao: 2.2, atores: ["Yalitza Aparicio","Marina de Tavira","Jorge Antonio Guerrero"], anoDeLancamento: 2018, emCartaz: false})

let catalogoConvertido = JSON.stringify(catalogo);

console.log(catalogoConvertido)*/