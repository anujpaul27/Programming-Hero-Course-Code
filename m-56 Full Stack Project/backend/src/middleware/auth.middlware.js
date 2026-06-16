const mongoose = require('mongoose')
async function verifyToken   (req,res,next) 
{
    try
    {
        const header = req.headers.authorization;
        const token = header.split(' ')[1]
        if (!token)
        {
            return res.status(401).json({
                message: 'User Token Not Found.'
            })
        }

        // get session 
        const sessionModel = await mongoose.connection.db.collection('session')
        const findSessionWithToken = await sessionModel.findOne({token:token})
        const userId = findSessionWithToken.userId
        
        const userModel = await mongoose.connection.db.collection('user')
        const userInfo = await userModel.findOne({_id: userId})
        
        req.user = userInfo
        
        next()
    }
    catch (error)
    {
        res.status(500).json({
            message: error.message
        })
    }
}



module.exports = verifyToken
