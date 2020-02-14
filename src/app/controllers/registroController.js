const express = require('express');
const Registro = require('../models/registro');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registro = await registro.find().populate(['user', 'taska']);

        return res.send({ registro });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading registro' });
    }

});
router.get('/registroId', async (req, res) => {
    try {
        const registro = await Registro.findById(req.params.RegistroId).populate('user');

        return res.send({ Registro });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading project' });
    }

    router.post('/', async (req, res) => {
        try {
            const { title, description, task } = req.body;

            const registro = await Registro.create({ title, description, user: req.userId });

            await Promise.all(tasks.map(async task => {
               const registroTask = new Task({ ...task, registro: registro._id});

               await registroTask.save();
               
               registro.tasks.push(registroTask);
            }));

            await registro.save();

            return res.send({ registro });

        } catch (err) {
            return res.status(400).send({ error: 'Error creating new registro' });
        }
    });
    router.put('/registroId', async (req, res) => {
        try {
            const { title, description, task } = req.body;

            const registro = await Registro.findByIdAndUpdata(req.params.registroId, { 
                title, 
                description 
            },{ new: true });

            registro.task = [];
            await Task.remove({ registro: registro._id});

            await Promise.all(tasks.map(async task => {
               const registroTask = new Task({ ...task, registro: registro._id});

               await registroTask.save();
               
               registro.tasks.push(registroTask);
            }));

            await registro.save();

            return res.send({ registro });

    }catch (err) {
        return res.status(400).send({ error: 'Error updating registro' });

    router.delete('/registrotId', async (req, res) => {
        try {
            await Registro.findByIdAndRemove(req.params.RegistroId);

            return res.send();

        } catch (err) {
            return res.status(400).send({ error: 'Error deleting registro' });
        }
    });

    module.exports = app => app.use('/registro', router);
