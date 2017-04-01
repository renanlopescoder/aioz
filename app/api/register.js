let mongoose =  require('mongoose');
let model = mongoose.model('User');

module.exports = (app) => {

  let api = {};

  api.createUser = (req, res) => {
    
    model.create(req.body).then(
      (user) => {
        res.json(user);
      },
      (error) => {
        console.log(error);
        res.status(404).json(error);
      }
    );
  };

  return api;
};