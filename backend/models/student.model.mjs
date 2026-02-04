import mongoose from "mongoose";
import 'dotenv/config';

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    rollNo: {
        type: Number,
        required: true,
        minimum: 1,
        maximum: 30,
        unique: true,
        description: "Roll no must be in between 1 to 30"
    },
    Class: {
        type: Number,
        required: true,
        min: 6,
        max: 10
    },
    Address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Present", "Absent", "Leave"],
        default: "Absent"
    }

}, { timestamps: true })
const Student = mongoose.model('Student', studentSchema)
export default Student