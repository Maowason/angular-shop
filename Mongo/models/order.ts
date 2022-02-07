/*
    This program file has the schema for the Database
*/

const mongoose1 = require('mongoose')


// Praan Schema
const orderSchema = new mongoose1.Schema({
    name:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    totalPrice:{
        type: String,
        required: true
    }
},
// Will add createdAt and updatedAt to the database
{ timestamps: true })

// Exporting the schema
module.exports = mongoose1.model('Order', orderSchema)