import {openDB} from './config/db.js'

import {
  SELECT_VITIMA_BY_IDADE,
  SELECT_OCORRENCIA_BY_GENERO,
  SELECT_OCORRENCIA_BY_ENDERECO,
} from './config/queries.js'
;(async()=>{
  const db = await openDB()
  try{
    const idadeMin = 20;
    const idadeMax = 35;
  let results = await db.all(SELECT_VITIMA_BY_IDADE, [idadeMin, idadeMax])
  console.log(`Vitimas com idade entre ${idadeMin} e ${idadeMax}: `)
  console.log(results)

  results = await db.all(
    SELECT_OCORRENCIA_BY_GENERO,
    'FEMENINO', 1
  )
  console.log('Ocorrencias com vitimas do gênero feminino onde houve obito:')
  console.log(results)
  results = await db.all(SELECT_OCORRENCIA_BY_ENDERECO,'Rua D')
  console.log('Vitimas com ocorrências relacionadas ao endereço "Rua D": ')
  console.log(results)
  }catch(e){
    console.log(e)
    }
})()