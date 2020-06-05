const express = require('express');  
const app = express();  
const courseRoutes = express.Router();  
// Require Product model in our routes module  
let Course = require('../models/Course');  

// Defined get data(index or listing) route  
courseRoutes.route('/').get(function (req, res) {  
  Course.find(function (err, courses){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(courses);  
    }  
  });  
});  
  
module.exports = courseRoutes;  