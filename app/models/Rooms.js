import mongoose from "mongoose";

const RoomSchema=new mongoose.Schema({
    title:{type:String,required:true},
    slug:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    type:{type:String,required:true},
   status:{type:String,required:true},
   image:{type:String},
   location:{type:String,required:true},
    address:{type:String,required:true},
    phone:{type:String,required:true},
   email:{type:String,required:true},
    
});
export default mongoose.models.Room || mongoose.model("Room", RoomSchema);

