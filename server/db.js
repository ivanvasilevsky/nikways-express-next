import { Sequelize } from 'sequelize'


export default new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'mysql',
    logging: false,
    host: process.env.DB_HOST
  }
)