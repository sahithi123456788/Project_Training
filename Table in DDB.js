const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

AWS.config.update({
  region: 'ap-southeast-2', 
  accessKeyId: process.env.accessKeyId, 
  secretAccessKey: process.env.secretAcessKey,
});
 

AWS.config.update({region: 'ap-southeast-2'});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const params = {
  TableName: 'empdetails'
};


ddb.scan(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Items);
  }
});
