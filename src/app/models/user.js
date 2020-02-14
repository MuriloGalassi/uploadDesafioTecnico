const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    birthdate: {
        type: Date,
        required: true,

    },
    adress: {
        type: String,
        required: true,
    },
    CpF: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User',UserSchema);

module.exports = User;