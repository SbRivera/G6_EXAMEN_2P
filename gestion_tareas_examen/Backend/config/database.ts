import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('rest_api_db', 'root', '150919', {
  host: 'localhost',
  dialect: 'mysql',
});
