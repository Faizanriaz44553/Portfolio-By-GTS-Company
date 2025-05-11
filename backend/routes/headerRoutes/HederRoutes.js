import express from "express";
import headerControler from "../../controllers/adminControler/headerControler/headerContoler.js";


const contentUploader = express.Router()

contentUploader.use('/header' , headerControler)

export default contentUploader