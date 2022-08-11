import Sequelize from 'sequelize';
import sequelize from '../database/index.js';

const Income = sequelize.define("Income", {
    name: { type: Sequelize.STRING, allowNull: false },
    amount: { type: Sequelize.FLOAT, allowNull: false },
    date: { type: Sequelize.DATE, allowNull: false },
    isIncome: { type: Sequelize.BOOLEAN, defaultValue: true },
    isExpense: { type: Sequelize.BOOLEAN, defaultValue: false }
}, { timestamps: true });

export default Income;