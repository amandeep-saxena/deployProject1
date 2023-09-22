const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const EmpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must be provide NAME"],
        trim: true,
        maxlength: [20, "name  can not be more than 20"]
    },
    email: {
        type: String,
        require: true

    },
    phone: {
        type: Number,
        require: true
    },
    date: { type: Date, default: Date.now },


})
module.exports = new mongoose.model('TASK', EmpSchema)