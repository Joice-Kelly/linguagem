import {openDB} from './config/db.js'
import {
  CREATE_TABLE_VITIMA,
  CREATE_TABLE_OCORRENCIA,
  INSERT_VITIMA,
  INSERT_OCORRENCIA,
  TRUNCATE_VITIMA,
  TRUNCATE_OCORRENCIA,
} from './config/queries.js'

const vitimas = [
  { 
    id:1,
    nome: 'João', 
    idade: 25, 
    genero: 'Masculino' 
  },
  { 
    id:2,
    nome: 'Maria', 
    idade: 30, 
    genero: 'Feminino' 
  },
  { 
    id:3,
    nome: 'Pedro', 
    idade: 40, 
    genero: 'Masculino' 
  },
  { 
    id:4,
    nome: 'José', 
    idade: 18, 
    genero: 'Masculino' 
  },
  { 
    id: 5,
    nome: 'Julia', 
    idade: 35, 
    genero: 'Feminino' 
  },
  {
    id: 6,
    nome: 'Fernanda',
    idade: 28,
    genero: 'Feminino'
    },
]
const ocorrencias = [
  {
    descricao: 'Doença grave',
    endereco: 'Rua A',
    vitima_id: 1,
    houve_obito: 0
    },
    {
    descricao: 'Doença leve',
    endereco: 'Rua B',
    vitima_id: 1,
    houve_obito: 1
    },
    {
    descricao: 'Doença Depressão',
    endereco: 'Travessa A',
    vitima_id: 2,
    houve_obito: 1
    },
    {
    descricao: 'Doença Diabetes',
    endereco: 'Rua D',
    vitima_id: 2,
    houve_obito: 0
    },
    {
    descricao: 'Doença Alzheimer',
    endereco: 'Travessa E',
    vitima_id: 3,
    houve_obito: 1
    },
    {
    descricao: 'Doença Hipertensão',
    endereco: 'Rua F', 
    vitima_id: 3,
    houve_obito: 0
    },
    {
    descricao: 'Doença Câncer',
    endereco: 'Rua G',
    vitima_id: 4,
    houve_obito: 1
    },
    {
    descricao: 'Doença AVC',
    endereco: 'Rua H',
    vitima_id: 4,
    houve_obito: 0
    },
    {
    descricao: 'Doença Tuberculose',
    endereco: 'Rua I',
    vitima_id: 5,
    houve_obito: 1
    },
    {
    descricao: 'Doença Bordeline',
    endereco: 'Rua Getulio Vargas',
    vitima_id: 5,
    houve_obito: 0
    },
    {
      descricao: 'Doença Bipolar',
      endereco: 'Travessa J',
      vitima_id: 6,
      houve_obito: 1
    },
    {
      descricao: 'Doença Bordeline',
      endereco: 'Rua J',
      vitima_id: 6,
      houve_obito: 0
    },
    ]
  ;(async()=>{
    const db = await openDB()
    await db.exec(CREATE_TABLE_VITIMA)
    await db.exec(CREATE_TABLE_OCORRENCIA)
    await db.exec(TRUNCATE_VITIMA)
    await db.exec(TRUNCATE_OCORRENCIA)
    for(let i=0; i<vitimas.length;i++){
      const {id, nome, idade, genero} = vitimas[i]
      console.log({id, nome, idade, genero})
      await db.run(INSERT_VITIMA,i+1, nome, idade, genero)
      console.log(`Vitima #${i+1} criada`)
    }
    for (let i=0; i<ocorrencias.length; i++){
      const {id, descricao, endereco, vitima_id, houve_obito} = ocorrencias[i]
      console.log({id:i+1, descricao, endereco, vitima_id, houve_obito});
      await db.run(INSERT_OCORRENCIA,i+1, descricao, endereco, vitima_id, houve_obito)
      console.log(`Ocorrencia #${i+1} criada`)
    }
    console.log('Mal feito desfeito');
  })()
