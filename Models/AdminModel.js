const mongoose=require('mongoose')
const bcrypt=require("bcryptjs")

const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
    username:{
        type:String,
        required:[true,'password is required']
    },
   createdAt:{
    type:Date,
    default:new Date()
}
})
adminSchema.pre("save", async function(){
    this.password=await bcrypt.hash(this.password, 12)
})
module.exports=mongoose.model("Admin", adminSchema)