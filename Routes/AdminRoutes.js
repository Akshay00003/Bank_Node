const {signup,Login}=require("../Controllers/AdminController")
const {adminVerification}=require('../Middlewares/AdminMiddlewares')
const router=require("express").Router()

router.post('/signup', signup)
router.post('/login', Login)
router.post('/',adminVerification)

module.exports=router