const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const tenderSchema = new Schema({
    headerText: {
        type: String,
        required: true
    },

    imgUrl: {
        type: String,
    },

    footerText: {
        type: String,
        required: true
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

}, { timestamps: { createdAt: "created_at" } })

module.exports = new Model("Tender", tenderSchema)