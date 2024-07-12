const Transaction=require('../Models/TransactionModel')
const User=require('../Models/UserModel')

module.exports.create=async(req,res)=>{
    const {type,amount,userId}=req.body
    try{
        const user = await User.findById(userId);
        if (!user) {
          return res.json({ message: 'User not found' });
        }
        const transaction=new Transaction({type,amount,userId})
        await transaction.save()
        if (type === 'deposit') {
            user.account += amount;
          } else if (type === 'withdrawal') {
            if (user.account < amount) {
              return res.json({ message: 'Insufficient balance' });
            }
            user.account -= amount;
          } else {
            return res.status(400).json({ message: 'Invalid transaction type' });
          }

          await user.save();
        res.json({message:'Transaction successful',transaction})
    }catch(err){
        res.send(err)

    }
}
module.exports.view=async(req,res)=>{
    try{
        const {userId}=req.params
        const transaction=await Transaction.find({userId})
        if(!transaction){
            res.send({message:"Invalid user"})
        }
        res.json(transaction)
    }catch(err){
        res.send(err)
        console.log(err);
    }
}
