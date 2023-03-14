var express = require('express');
var router = express.Router();
var multer=require('multer')
let UserModal=require('./users')

router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/submit', upload.single('avatar'),function(req,res){
  UserModel.create({
    name:req.body.name,
    avatar:req.file.filename
  })
  .then(function(data){
    res.render('gallery',{data})
  })
 })
module.exports = router;
// var storage=multer.diskStorage({
//   destination:function(req,file,cb){
//     cb(null,'public/images/uploads')
//   },
//   filename:function(req,file,cb){
//     cb(null,file.originalname+'-'+ Date.now)
//   }
// })
// var upload=multer({storage:storage})
