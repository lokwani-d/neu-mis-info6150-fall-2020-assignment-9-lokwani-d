import mongoose from 'mongoose';

// This is my model for the schema
const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "Title is a required property."
        },
        description: {
            type: String
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        dueDate: {
            type: Date,
            default: Date.now
        },
        dueTime:{
            type: Date,
            default: Date.now
        },
        completed: {
            type: Boolean,
            default: false,
            required: "Title is a required property."

        }
    },
    {
        versionKey: false
    }
);

TodoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

TodoSchema.set('toJSON', { virtuals: true });

const model = mongoose.model('Todo', TodoSchema);

export default model;