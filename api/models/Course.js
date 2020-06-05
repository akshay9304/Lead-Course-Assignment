const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

let Course = new Schema({  
    popularity: {  
      type: Number  
    },  
    author: {  
      type: String  
    },  
    difficulty_level: {  
      type: Number  
    },
    name: {  
        type: String  
      },
      category:[ {  
        type: String,
        type: String
      }],
     
  },{  
      collection: 'Course'  
  });  
  module.exports = mongoose.model('Course', Course);