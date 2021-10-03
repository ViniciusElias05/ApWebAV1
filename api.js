let posicao = []
let servidorOnline = true;
let recordesCorrida = []
const chegada = (piloto) => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject('servidor Offline')
    posicao.push(piloto)
    resolve(posicao)


  })
}

const recorde = () => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject('servidor Offline')
    resolve(posicao[0])
  })
}

const posicoes = () => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject('servidor Offline')
    resolve(posicao)
  })
}

let recordistas =(rec) =>{
  recordesCorrida.push(rec)
  
  console.log(`\n-----------------------\n`)
  console.log(`\O recorde é de ${rec.piloto} de ${rec.feedback} segundos`)
  console.log(`\n-----------------------\n`)
}

let pesquisaRecordista = (recordista)=>{
  for(let i = 0; i<recordesCorrida.length; i++){
    if(recordista.nome==recordesCorrida[i].piloto){
      console.log(`O piloto ${recordista.nome} está na lista de recordistas.`)
    }else{
      console.log(`O piloto ${recordista.nome} não está entre os recordistas.`)
    }
    console.log(`\n-----------------------\n`)
  }
}


module.exports = {
  'api/v1/chegada': chegada,
  'api/v1/recorde': recorde,
  'api/v1/posicoes': posicoes,
  'api/v1/recordistas': recordistas,
  'api/v1/pesquisaRecordista': pesquisaRecordista
}