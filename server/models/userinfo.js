const mongoose = require('mongoose');
const {Schema} = mongoose;

const userInfoSchema = new Schema ({
    // reference to user
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userRole: String,
    firstName: String,
    lastName: String,
    image: String
})

const userinfoModel = mongoose.model('UserInfo', userInfoSchema);
module.exports = userinfoModel;