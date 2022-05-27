import express, { Request, Response } from 'express'
import { MysqlDataSource } from './source'
import { user } from './models/typeorm/user'

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
    
    app.post('/register', async function (req: Request, res: Response) {
      console.log(req.body)
      const member = await MysqlDataSource.getRepository(user).create(req.body)
      const results = await MysqlDataSource.getRepository(user).save(member)
      return res.send(results)
    })

    app.listen('3001', () => {
      console.log(`⚡️[server]: Server is running at https://localhost:3001`)
    })

  })
  .catch((error) => console.log(error))
