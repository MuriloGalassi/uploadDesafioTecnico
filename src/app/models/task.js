const mongoose = require('../../database');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    registro: {
        type:  mongoose.Schema.types.objectId,
        ref: 'Registro',
        require: true,
    },
    assignedTo: {
        type: mongoose.Schema.types.objectId,
        ref: 'User',
        require: true,        
    },
    completed: {
        type: Boolean,
        require: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Task = mongosse.model('task',TaskSchema);

module.exports = Task;