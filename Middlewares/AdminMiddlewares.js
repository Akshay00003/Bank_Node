const Admin=require('../Models/AdminModel')
require('dotenv').config()
const jwt=require('jsonwebtoken')

module.exports.adminVerification = (req, res) => {
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.ADMIN_KEY, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const user = await Admin.findById(data.id)
        if (user) return res.json({ status: true, user: user.username })
        else return res.json({ status: false })
      }
    })
  }