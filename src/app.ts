import express from 'express'
import {solidityRouter} from './routers/solidityRouter'

const PORT = Number(process.env.PORT) || 3001

const app = express()

app.use('/analyze', solidityRouter())

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
}).on('error', (error: Error) => {
  console.error(`Error occurred during the execution ${error.message}`)
  process.exit(1)
})
