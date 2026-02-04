import mongoose from "mongoose";
import 'dotenv/config';

const teacherSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },

  phone: {
    type: String,
    required: true
  },

  subject: {
    type: String,
    required: true
  },

  salary: {
    type: Number,
    required: true
  },

  joiningDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Leave'],
    default: 'Absent'
  }

}, { timestamps: true });

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
