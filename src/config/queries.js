export const CREATE_TABLE_VITIMA = `
  CREATE TABLE IF NOT EXISTS vitima (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    idade INTEGER NOT NULL,
    genero TEXT NOT NULL
  )
`
export const CREATE_TABLE_OCORRENCIA = `
    CREATE TABLE IF NOT EXISTS ocorrencia (
      id INTEGER PRIMARY KEY,
      descricao TEXT NOT NULL,
      endereco TEXT NOT NULL,
      vitima_id INTEGER NOT NULL,
      houve_obito INTEGER NOT NULL,
      FOREIGN KEY (vitima_id) REFERENCES vitima(id)
    ) 
`
export const INSERT_VITIMA = `
INSERT INTO vitima (id, nome, idade, genero) VALUES (?, ?, ?, ?)
`
export const INSERT_OCORRENCIA = `
INSERT INTO ocorrencia (id, descricao, endereco, vitima_id, houve_obito) VALUES (?, ?, ?, ?, ?)
`
export const SELECT_VITIMA_BY_IDADE = `
SELECT * FROM vitima WHERE idade BETWEEN ? AND ?
`
export const SELECT_OCORRENCIA_BY_GENERO = `
SELECT * FROM ocorrencia JOIN vitima ON ocorrencia.vitima_id = vitima.id WHERE vitima.genero = ? AND ocorrencia.houve_obito = ?
`
export const SELECT_OCORRENCIA_BY_ENDERECO = `
SELECT * FROM vitima JOIN ocorrencia ON vitima.id = ocorrencia.vitima_id WHERE LOWER(ocorrencia.endereco) LIKE ?
`
export const TRUNCATE_VITIMA = `
      DELETE FROM vitima
`

export const TRUNCATE_OCORRENCIA = `
      DELETE FROM ocorrencia
`