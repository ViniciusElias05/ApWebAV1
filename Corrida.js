let api = require('./api')
class Corrida {
    constructor() {

    }
    largada(carros) {
        for (let i = 0; i < carros.length; i++) {
            console.log(`${i + 1} - ${carros[i].modelo} `)
        }
        console.log("-----------------------\n")
    }
    podio(posicao) {
        console.log(`\n----------------------------\n`)
        this.competidores = posicao
        for (let i = 0; i < posicao.length; i++)
            console.log(`${i + 1}°lugar - ${posicao[i].piloto} - tempo ${posicao[i].feedback}`)
        

    }
    enviandoRecordista(posicao){
        const keys = ['piloto', 'feedback']
        const filterObject = (obj, keys) =>{
            return keys
                    .map(key => ({[key]: obj[key]}))
                    .reduce((anterior, atual)=>{
                        return {
                            ...anterior,
                            ...atual
                        }
                    },{})
        }
        const recordista = filterObject(posicao[0], keys)
        api['api/v1/recordistas'](recordista)

    }

    diferencaCorredores(piloto) {
        let segundos = 0
        let milisegundos = 0
        for (let i = 0; i < this.competidores.length; i++) {
            if (this.competidores[i].piloto == piloto.nome) {
                if (i-1<0) 
                console.log(`\nCorredor selecionado está na primeira posição`)
                else {
                 segundos = this.competidores[i].feedback - this.competidores[i - 1].feedback
                 milisegundos = segundos * 1000
                    console.log(`A diferença de tempo entre ${this.competidores[i].piloto} e ${this.competidores[i-1].piloto} é de ${segundos.toFixed(3)} segundos e ${milisegundos.toFixed(2)} milisegundos`)
                    console.log("\n-----------------------\n")
                }
            }
        }
    }
}

module.exports = Corrida