const {create,view}=require('../Controllers/TransactionController')
const router=require('express').Router()

router.post('/create', create)
router.get('/list/:userId',view)
module.exports=router