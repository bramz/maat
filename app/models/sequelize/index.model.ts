import { db } from '../../data/db.config'
import { Sequelize } from 'sequelize'


const sequelize = new Sequelize('database', 'username', 'password', {
    host: db.host,
    username: db.user,
    password: db.password,
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Connection established.')
} catch (error) {
    console.error('Unable to connect to database:', error)
}
