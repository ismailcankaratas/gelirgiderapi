import Sequelize from 'sequelize';
import sequelize from '../database/index.js';

const Expense = sequelize.define("Expense", {
    name: { type: Sequelize.STRING, allowNull: false },
    amount: { type: Sequelize.FLOAT, allowNull: false },
    date: { type: Sequelize.DATE, allowNull: false },
    isIncome: { type: Sequelize.BOOLEAN, defaultValue: false },
    isExpense: { type: Sequelize.BOOLEAN, defaultValue: true }
}, { timestamps: true });

export default Expense;