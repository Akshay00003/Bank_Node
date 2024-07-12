const {signup, Login}=require("../Controllers/AuthController")
const {userVerification}=require('../Middlewares/AuthMiddleware')
const router=require("express").Router()

router.post('/signup', signup)
router.post('/login', Login)
router.post('/user', userVerification)

module.exports=router