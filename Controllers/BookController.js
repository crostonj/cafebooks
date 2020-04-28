const goodreads = require('goodreads-api-node');

var express = require('express');
var router = express.Router();

var bookController = function(){
  var middleware = function (req, res, next) {
    //Secure all routes
    if (!req.user) {
        //    res.redirect('/');
    }
    next();
  };

  var getByAuthor = function(req, res){
    router.get('/', function(req, res, next) {

      const myCredentials = {
        key: process.env.GOODREADS_KEY,
        secret: process.env.GOODREADS_SECRET
      };
       
      const gr = goodreads(myCredentials);
    
      // returns all books by an author given the authorID
      gr.getBooksByAuthor('175417')
      .catch(e=> {
        console.log(e);
      })
      .finally(a => {
        console.log('finally', a)
        return 1
      })
      .then(r => {
          
        res.send(r)
      });
    
    });
  
    
  }
  
  return {
    getByAuthor: getByAuthor
  }
}

/* GET users listing. */

module.exports = bookController;
