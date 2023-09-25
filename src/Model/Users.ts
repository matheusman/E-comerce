import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username : {type : String, required : true, minLength : 3, toLowercase : true},
    password : {type : String, required : true, minLength : 6},
    email : {type : String, required : true},
    cpf : { type : Number, required : true, minLength : 11, maxLength : 14},
    dateBrith : { type : Date, required : true},
    date : {type : Date, default : Date.now }
})

export default mongoose.model('User', userSchema)