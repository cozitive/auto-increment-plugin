import { Document, Schema, model } from 'mongoose'
import AutoIncrementPlugin from 'auto-increment-plugin'

interface UserInterface extends Document {
    id: number
    username: string
}

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
})

export default model<UserInterface>('User', UserSchema)
export { UserInterface, UserSchema }
