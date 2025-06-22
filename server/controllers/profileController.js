const userInfo = require('../models/userinfo');

exports.userProfile = async (req,res) => {
    try {
        const userId = req.params.userId;
        console.log("Received userId:", userId); 

        const {userRole , firstName, lastName} = req.body;
        const image = req.file?.buffer;
        // check for empty fields
        if (!userRole || !firstName || !lastName || !image) {
            return res.json({
                error: 'required!'
            })
        }
        // create in database
        const profile = await userInfo.create({
            user: userId,
            userRole,
            firstName,
            lastName,
            image,
        })
        return res.json({profileId: profile._id});
    } catch (error) {
        console.log(error)
    }
};