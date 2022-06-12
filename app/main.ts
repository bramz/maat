import express, {Request, Response} from 'express'
import { MysqlDataSource } from './source'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes/index'

const app = express()

let logger = (req: Request, res: Response, next: any) => {
  let date = new Date();
  let date_format =
    date.getHours() + ":" + 
    date.getUTCMinutes() + ":" +
    date.getUTCSeconds() + ":" +
    date.getMonth() + "/" + 
    date.getDate() + "/" + 
    date.getFullYear() + ":"
  
  console.log(date_format, req.method, req.url)
  next()
}

app.use(logger)
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

MysqlDataSource.initialize()
  .then(() => {
    console.log('Data source initialized')
    
    // routes
    app.use('/', routes)

    app.listen('3001', () => {
      console.log(`⚡️[server]: Server is running at https://localhost:3001`)
    })

  })
  .catch((error) => console.log(error))
