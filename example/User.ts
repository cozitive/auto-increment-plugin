import { Schema, model } from 'mongoose'
import AutoIncrementPlugin from 'auto-increment-plugin'

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

UserSchema.plugin(AutoIncrementPlugin, {
    model_name: 'User',
    field: 'my_id',
    id_model: 'MyId',
})

export default model('User', UserSchema)
export { UserSchema }
