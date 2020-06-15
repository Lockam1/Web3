var apiCallFromHttp = require('../src/httpRequest.js');
//Routes for /... links
module.exports = {
  index(req, res){
    return res.status(200).render('index');
  },
  about(req, res){
    return res.status(200).render('about');
  }
  // request(req, res){

  //   return res.status(200).render('index');
  // }
}
