const {signup, login,list,status,Delete}=require("../Controllers/AuthController")
const {userVerification}=require('../Middlewares/AuthMiddleware')

const router=require("express").Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/user', userVerification)
router.get('/users', list)
router.post('/user/:userId', status)
router.delete('/user/:userId', Delete)

module.exports=router