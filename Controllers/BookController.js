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

      let authorid = "12354";

      const myCredentials = {
        key: process.env.GOODREADS_KEY,
        secret: process.env.GOODREADS_SECRET
      };
       
      const gr = goodreads(myCredentials);
    
      // returns all books by an author given the authorID
      gr.getBooksByAuthor(authorid)
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

  var get = function(req, res){
    router.get('/', function(req, res, next) {

      let authorid = req.params.id;

      const myCredentials = {
        key: process.env.GOODREADS_KEY,
        secret: process.env.GOODREADS_SECRET
      };
       
      const gr = goodreads(myCredentials);
    
      // returns all books by an author given the authorID
      gr.getBooksByAuthor(authorid)
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
    getByAuthor: getByAuthor,
    get: get,
    middleware: middleware
  }
}

/* GET users listing. */

module.exports = bookController;
