var Cloudant = require('cloudant');
//Check DB error
var cloudant = Cloudant({account:"e15bb68f-18b5-4ae3-983c-41756e9111f2-bluemix",
password:"86db8b1c9e69f48e5c1afb07a4db2f7b6dba621025ee7e0514442eb1f6b79227",
function(err,cloudant){
  if(err){
    console.log('Init Failed!');
    return next(err);
  }
}
});

//Check if user exist in the DB
var checkExistingUser = function(req, res, callback) {
  var db = cloudant.db.use("foris_users");
    //Fetch the data
  db.list({include_docs:true}, function(err,data){
    if(!err){
      //Check if user exist
      data.rows.forEach(function(doc){
        if(doc.id === req.body.email){
          err = 'Email is in use';
        }
      });
      callback(err);
    }
  });
}

//Get information about the user
var getUserInfo = function(payloadID, callback) {
  var db = cloudant.db.use("foris_users");
  db.get(payloadID, function(err, data) {
    callback(err,data);
  });
}

//Create a new user
var createUser = function(req, res, callback) {
  var db = cloudant.db.use("foris_users");
  console.log("Pwd " + req.body.password + " Email " + req.body.email );

  //Insert new user in the DB
  db.insert({ _id: req.body.email, password: req.body.password, email: req.body.email }, function(err, data) {
    callback(err, data);
  });
}

/* GET sensor data */
var realtimedata = function(req, res, next) {

  var cloudant = Cloudant({account:"474306cf-8215-4090-879c-4fb2f25624a6-bluemix",
  password:"a0807af23864f72d10fc698e9d5e2a2a739411860d67625aabf73061d22acccd",
  function(err,cloudant){
    if(err){
      console.log('Init Failed!');
      return next(err);
    }
  }
  });

  var db = cloudant.db.use("sensor-data");
  //Fetch the data
	db.list({include_docs:true}, function(err,data){
		if(!err){
      //Send the data
			res.send(data);
      //res.send(data.rows);
		}
	});
}

/* GET sensor info */
var sensordetails = function(req, res, next) {

  var db = cloudant.db.use("mobile_app");
  //Fetch the data
	db.list({include_docs:true}, function(err,data){
		if(!err){
        //Send the data
			res.send(data);
		}
	});
}



module.exports.createUser = createUser;
module.exports.checkExistingUser = checkExistingUser;
module.exports.getUserInfo = getUserInfo;
module.exports.realtimedata = realtimedata;
module.exports.sensordetails = sensordetails;
