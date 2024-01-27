const pool = require("./db")
const app = require("./app")

const { readdirSync, readFileSync } = require("fs")
const { join } = require("path")

const PORT = process.env.PORT || 3001



async function start() {
  // Obtener los archivos .sql
  const files = readdirSync(`${__dirname}/models`)
  const models = files.filter(file => {    
    let regex = /.*\.sql$/

    if (regex.test(file)) {
      return file
    }
  })

  try {
    // Leer esos archivos .sql <==> obtener el contenido
    for (const modelName of models) {
      const sql = readFileSync(`${__dirname}/models/${modelName}`, "utf-8")

      await pool.query(sql)
    }

    // Inicializo
    app.listen(PORT, () => console.log(`listening on ${PORT}`))
  } catch (e) {
    console.log("Error with DB", e)
  }

}

start()