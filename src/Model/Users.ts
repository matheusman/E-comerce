import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username : {type : String, required : true, minLength : 3, toLowercase : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true, minLength : 6},
    cpf : { type : String, required : true, minLength : 11, unique : true, maxLength : 14},
    dateBrith : { type : Date, required : true},
    phone : { type : String, required : true},
    date : {type : Date, default : Date.now }
})

userSchema.pre( 'save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

export default mongoose.model('User', userSchema)