let Veiculo = require('./Veiculo')
let api = require('./api')
let Piloto = require('./Piloto')
let Corrida = require('./Corrida')

let arnaldo = new Piloto('Arnaldo', 4, 15)
// console.log(arnaldo.xp())

let pedro = new Piloto('Pedro', 2, 30)
// console.log(pedro.xp())


let carrango = new Veiculo('carro', 'corsa', 2000, 'cinza', 100)
let ferrari = new Veiculo('carro', 'ferrari', 2021, 'vermelha', 400)

let competidores = []
let relatorio = (obj) => {

  api['api/v1/chegada'](obj.piloto).then((respostaDistancia) => {

    if (respostaDistancia.length == Veiculo.totalVeiculosCorrida) {
      api['api/v1/recorde']().then((resposta) => {
        console.log(`O recorde é de ${resposta}`)
      }).catch(erro => console.log(erro))

      api['api/v1/posicoes']().then((resposta) => {
        PrimeiraCorrida.podio(competidores)
        PrimeiraCorrida.enviaRecordista(competidores)
        PrimeiraCorrida.diferencaCorredores(pedro)
        api['api/v1/pesquisaRecordista'](arnaldo)
      }).catch(erro => console.log(erro))

    }
  }).catch(erro => console.log(erro))

  console.log(obj.piloto + ' com motor de ' + obj.potenciaMotor + 'cv demorou ' + obj.feedback + ' segundos de 0 a 100 km')
  competidores.push(obj)

}
let PrimeiraCorrida = new Corrida()

ferrari.acelerando0a100(arnaldo, relatorio)
carrango.acelerando0a100(pedro, relatorio)

let carros = []
carros.push(ferrari)
carros.push(carrango)
PrimeiraCorrida.largada(carros)






