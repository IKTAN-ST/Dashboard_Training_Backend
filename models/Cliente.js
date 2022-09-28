import mongoose from 'mongoose';

const generarFolio = () => {
    return Date.now().toString(32);
};

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    fechaFinalizacion: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    curso: {
        type: String,
        required: true,
    },
    horas: {
        type: String,
    },
    estatus: {
        type: String,
    },
    folio: {
        type: String,
        unique: true,
    },
    administrador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Administrador',
    },
}, {
    timestamps: true,
});

clienteSchema.pre("save", async function(next){
    this.folio = await generarFolio() 
    console.log(this.folio)
    next();
})

const Cliente = mongoose.model('Cliente', clienteSchema)

export default Cliente;