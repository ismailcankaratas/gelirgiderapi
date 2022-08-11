import { Sequelize } from 'sequelize';
import dbConfig from "../config/database.js";

const sequelize = new Sequelize(process.env.NODE_ENV === 'production' ? process.env.CLEARDB_DATABASE_URL : dbConfig);

console.log(process.env.NODE_ENV);

sequelize.sync({ alter: true });

export default sequelize;