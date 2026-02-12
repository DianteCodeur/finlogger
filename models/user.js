import mongoose from 'mongoose';

//Create schema userSchema for users collection

const userSchema = new mongoose.Schema ({

 user_id: String,

 email: String,

 profile: {
    firstname: String,
    lastName: String,
    income: Number
 },

},{ collection: 'users' });

//Create User model using UserSchema

const User = mongoose.model('User', userSchema);

//Export User model

export default User;