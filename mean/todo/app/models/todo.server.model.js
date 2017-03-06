//app/models/todo.server.model.js

//grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//validation
function validateLength (v){
	return v.length <= 15;
}

//define our todo model
var TodoSchema = new Schema({
    titre: { 
    	type: String, 
    	default: '',
    	trim: true,
    	required: 'le titre le ne peut pas etre vide',
    	validate: [validateLength, 'le nom doit faire 15 lettres maximun']
    },
    descriptions: { 
    	type: Array, 
    	default: []
    },
    createdAt : { 
    	type: Date, 
    	default: new Date()
    },
    isDo: {
    	type: Boolean, 
    	default: false
    },
    createdBy: {
        type: String,
        default: '',
        trim: true
    }
})

//module.exports allows us to pass this to toher files when it is called
module.exports = mongoose.model('Todo', TodoSchema, 'todo');//collection
