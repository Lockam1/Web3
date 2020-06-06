const apiCallFromHttp = require('../src/httpRequest.js');


//Routes for /... links
module.exports = {
  index(req, res){
    return res.status(200).render('index');
  },
  about(req, res){
    return res.status(200).render('about');
  },
  request(req, res){
      apiCallFromHttp.callApi(function (response) {
        res.write(JSON.stringify(response));
        res.end();
      });
    return res.status(200).render('index');
  }
}
