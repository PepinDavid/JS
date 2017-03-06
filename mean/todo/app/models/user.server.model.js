//app/models/user.server.model.js

//grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//grab the bcrypt module and initialize it
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//define our user model
UserSchema =  new Schema({
	username: {
		type: String,
		trim: true,
    	required: 'Il vous faut un pseudo'    	
	},
	email: {
		type: String,
		trim: true,
    	required: 'Il faut votre email',
    	unique: true
	},
	password: {
		type: String,
		trim: true,
		required: 'Il vous faut un mot de passe'
	}
});

//Middleware for automatically hash password before is it save on db
UserSchema.pre('save', function(next){
	var user = this;

	//hash the password only if it modified or new !
	if(!user.isModified('password'))
		return next();

	//generate salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
		if(err)
			return next(err);

		//hash password with new salt
		bcrypt.hash(user.password, salt, function(err, hash){
			if(err)
				return next(err)

			//override the cleartext to hash
			user.password = hash;
			next();
		});
	});
});

//add method on our UserSchema for compare save password and password login
UserSchema.methods.comparePassword = function(candidatePassword, cb){
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if(err)
			return cb(err);

		cb(null, isMatch);
	});
};
//module.exports allows us to pass this to toher files when it is called
module.exports = mongoose.model('User', UserSchema, 'users');//collection
