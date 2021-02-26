import { Schema, model, Model } from 'mongoose'

function createIdModel(id_model_name: string): Model<any> {
    const IdSchema = new Schema({ id: Number })
    return model(id_model_name, IdSchema)
}

async function setIdModel(id_model: Model<any>): Promise<void> {
    const id_obj = await id_model.findOne()
    if (!id_obj) {
        await new id_model({ id: 1 }).save()
    } else {
        id_obj.id++
        await id_obj.save()
    }
}

async function setAutoIncrement(obj: any, id_model: Model<any>, field: string): Promise<void> {
    try {
        await obj.updateOne({
            $set: {
                [field]: (await id_model.findOne())!.id,
            },
        })
    } catch (error) {
        console.log(error)
        console.log(`ERROR: ${id_model.modelName} Does Not Exist`)
    }
}

export default function (schema: Schema, options: Options) {
    const model_upper = options.model.charAt(0).toUpperCase() + options.model.slice(1)
    const id_model = options.id_model ? options.id_model : `${model_upper}Id`
    const field = options.field ? options.field : 'id'

    const Id = createIdModel(id_model)
    schema.post('save', async function (this: any) {
        await setIdModel(Id)
        await setAutoIncrement(this, Id, field)
    })
}
