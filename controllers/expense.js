import Expense from './../models/Expense.js';

export const getAll = async (req, res, next) => {
    Expense.findAll().then((result) => {
        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send({ error: err });
    });
}

export const find = async (req, res, next) => {
    var id = req.params.id;
    Expense.findByPk(id).then((result) => {
        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send({ error: err });
    });
}

export const add = async (req, res, next) => {
    Expense.create(req.body).then(() => {
        return res.status(200).send({ message: "Succesfull Expense add" });
    }).catch((err) => {
        return res.status(500).send({ error: err });
    });
}

export const remove = async (req, res, next) => {
    const { id } = req.body;
    Expense.destroy({ where: { id: id } }).then(() => {
        return res.status(200).send({ message: "The deletion was successful." });
    }).catch((err) => {
        return res.status(500).send({ error: err });
    });
}

export const update = async (req, res, next) => {
    const { id } = req.body;
    Expense.findByPk(id).then((result) => {
        result.update(req.body);
        return res.status(200).send({ message: "The update was successful." });
    }).catch((err) => {
        return res.status(500).send({ error: err });
    });
}