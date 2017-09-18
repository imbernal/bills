var mongoose = require("mongoose");

var customerSchema = mongoose.Schema({
    date: {type: Date, default: Date.now },
    clientName: {type: String},
    number: {type:String},
    billPicture: {type:String}
});

module.exports = mongoose.model("customer" , customerSchema );
