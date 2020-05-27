//Routes for /... links
module.exports = {
  index(req, res){
      return res.status(200).res.render('inder');
  },
  about(req, res){
      return res.status(200).res.render('about');
  }
}
