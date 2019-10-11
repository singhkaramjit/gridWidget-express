const mongoose = require('mongoose');
const router = require('express').Router();
const Users = mongoose.model('Users');
router.get('/',   async (req, res, next) => {
    const allUsers = await Users.find().then((data) => (data));
         return res.status(200).json({
             status:true,
             data: allUsers,
         });
});
router.post('/',  async  (req, res, next) => {
  const {  email,
    firstname ,
    lastname,
    username,
    city,
    } = req.body;
    const user ={
        email,
    firstname ,
    lastname,
    username,
    city,
    createdAt: new Date()
    }
  const finalUser = new Users(user);
  return await finalUser.save().then(d=>{
    return res.status(200).json({
        status:true,
        data: d,
    });
  }).catch(e=>{
    return res.status(200).json({
        status:false,
        data: e,
    });
  });
});
router.put('/:id',  async  (req, res, next) => {
  const {  data} = req.body;
  const id = req.params.id;
  await Users.findByIdAndUpdate(id, data, {new: true}, function(err, model){
    if(err){
      console.log('err',err)
    } if(model){
      console.log('model',model)
    }
  });
  const allUsers = await Users.find().then((data) => (data));
         return res.status(200).json({
             status:true,
             data: allUsers,
         });
});
module.exports = router;

