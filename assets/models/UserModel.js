import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
    },
    admin: {
        type: Boolean,
        default: false,
    },
    avatar_image: {
        type: String,
        default: '',
    },
}, {
    timestamps: true
})

let dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default dataset