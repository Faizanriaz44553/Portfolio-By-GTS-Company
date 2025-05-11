import mongoose from "mongoose";


const HaderSchema = mongoose.Schema({
    heading : {type:String},
    links:{
        link1: {type:String},
        link2: {type:String},
        link3: {type:String},
        link4: {type:String},
    },
    image:{type:String}
});


const headerSchema = mongoose.model('header' , HaderSchema)

export default headerSchema