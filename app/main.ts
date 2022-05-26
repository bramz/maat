import express, { Request, Response } from 'express'
import { MysqlDataSource } from './source'

const app = express()
app.use(express.json())

MysqlDataSource.initialize()
  .then(() => {
    console.log("Data source initialized.")

    // routes
    app.get('/', (req: Request, res: Response) => {
      res.json('Maat Express')
    })
    
    app.get('/login', (req: Request, res: Response) => {
      res.send('Login')
    })
    
    app.get('/register', (req: Request, res: Response) => {
    })    

    app.listen('3001', () => {
      console.log(`⚡️[server]: Server is running at https://localhost:3001`)
    })

  })
  .catch((error) => console.log(error))
