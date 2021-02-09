const AdminModel = require('../models/adminModel');

var adminController = {
    showuser:showuser,
 }


function showuser(req,res) {
    AdminModel.getUser().then((data)=>{
        data=JSON.stringify(data);
        data=JSON.parse(data);
        // console.log(data[0].username)
        res.render('pages/index',{data:data[0]})
    });
}


module.exports= adminController;