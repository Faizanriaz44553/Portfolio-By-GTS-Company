import mongoose from 'mongoose'

const dbConnection  = async (uri)=>{
   try {
    await mongoose.connect(uri)
    console.log('db connect sucessfully')
   } catch (error) {
     console.log(`db connection failed ${error}`);
   }
}


export default dbConnection