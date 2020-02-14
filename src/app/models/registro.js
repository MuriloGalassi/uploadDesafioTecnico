const mongoose = require('../../database');

const RegistroSchema = new mongoose.Schema({
    tatle: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    User: {
        type: mongoose.Schema.Types.objectId,
        ref: 'User',
        require: true,        
    },
    tasks: [{
        type: mongoose.Schema.Types.objectId,
        ref: 'task',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Registro = model('Registro',RegistroSchema);

module.exports = Registro;