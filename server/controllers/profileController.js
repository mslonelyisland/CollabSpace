const userInfo = require('../models/userinfo');

const userProfile = async (req,res) => {
    try {
        const {userRole , firstName, lastName} = req.body;
        const image = req.file?.buffer;
        // check for empty fields
        if (!userRole) {
            return res.json({
                error: 'required!'
            })
        }
        if (!firstName) {
            return res.json({
                error: 'required!'
            })
        }
        if (!lastName) {
            return res.json({
                error: 'required!'
            })
        }
        if (!image) {
            return res.json({
                error: 'required!'
            })
        }
        // create in database
        const profile = await userInfo.create({
            userRole,
            firstName,
            lastName,
            image,
        })
        return res.json({profileId: profile._id});
    } catch (error) {
        console.log(error)
    }
}

module.exports = (userProfile);