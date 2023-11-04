import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    title:  {
        type: String,
        required: 'Title is required.'
    },
    description: {
        type: String,
        required: 'Description is required.'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastModifiedDate: {
        type: Date,
        default: Date.now
    }
}, {skipVersioning: true });

const model = mongoose.model('toDo', Schema);

export default model; 