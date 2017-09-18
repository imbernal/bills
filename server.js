var express = require("express");
var app = express();
app.use(express.bodyParser({uploadDir:'/public'}));
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require('path');
var fs = require('fs');

var Customer =  require("./model/customer.js");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("static"));

mongoose.connect('mongodb://dailivis:imbernal123@ds159013.mlab.com:59013/dailivis',function (err, database) {
  if (err){
      return console.log(err);
  }

  app.listen(7397, function(){
    console.log('listening on 7397');
  });
});

app.get("/customers" , function(req,res){
   Customer.find({} , function(err, customers){
     if (err) console.log(err);

     res.send(customers);
   });
});

app.post("/oneCustomer", function(req,res){
  var myId = req.body.id;
  Stock.findOne({ id: myId } , function(err,rest){
    if(err) console.log(err);
    res.send(rest);
    console.log(rest);
  });

});

app.post("/createCustomer" , function(req , res){

    var tempPath = req.files.file.path;
    var targetPath = path.resolve('./public/image.png');

    if (path.extname(req.files.file.name).toLowerCase() === '.png') {
        fs.rename(tempPath, targetPath, function(err) {
            if (err) throw err;

            console.log(req.files.file.name);
        });
    } else {
        fs.unlink(tempPath, function () {
            if (err) throw err;
            console.error("Only .png files are allowed!");
        });
    }
   //  customer = new Customer({
   //     clientName: req.body.name,
   //     number: req.body.number,
   //     picture: req.body.pantaiId,
   // });

   // customer.save(function( err){
   //   if (err) console.log(err);
   //   else {
   //     console.log("Created");
   //   }
   //   res.send(customer);
   // });
});

// app.put("/updateStock",  function(req , res){
//
//   Stock.findOne({ id: req.body.id } , function(err,resp){
//
//      if(err) console.log(err);
//
//     if(req.body.name != null) resp.name = req.body.name;
//     if(req.body.symbol != null) resp.symbol = req.body.symbol;
//     if(req.body.price != null) resp.price = req.body.price;
//     if(req.body.date != null) resp.date = req.body.date;
//
//     resp.save(function(err){
//       if (err) console.log(err);
//
//       res.send(resp);
//     });
//
//    });
// });

app.delete("/deleteCustomer" , function(req , res){

  Customer.findOne({id: req.body.id } , function(err , resp){

    if(err) console.log(err);

    resp.remove();

    res.send("Nice");


  });

});
