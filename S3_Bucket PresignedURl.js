const AWS = require('aws-sdk');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
// Set your AWS credentials and region
AWS.config.update({

 accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAcessKey,
  region: 'ap-southeast-2'
});
console.log(process.env.accessKeyId,"Successfull acessKeyID");

// Create an S3 instance
const s3 = new AWS.S3();

// Define bucket name and file name
const bucketName = 'bucket1-apse2';
const fileName = 'note.txt';
const filePath = 'C:\Users\btakkillapati\Downloads\note.txt'; // Path to your local text file

// 1. Create bucket and upload file
async function createBucketAndUpload() {
  try {
    // Create bucket
    await s3.createBucket({ Bucket: bucketName }).promise();

    // Upload file
    const fileContent = fs.readFileSync(filePath);
    
    
    await s3.upload({
      Bucket: bucketName,
      Key: fileName,
      Body: fileContent
    }).promise();

    console.log('File uploaded successfully!');
  } catch (err) {
    console.error('Error uploading file:', err);
  }
}

// 2. Generate presigned URL
async function generatePresignedUrl() {
  try {
    // Generate presigned URL
    const url = await s3.getSignedUrlPromise('getObject', {
      Bucket: bucketName,
      Key: fileName,
      Expires: 36000
    });

    console.log('Presigned URL:', url);
  } catch (err) {
    console.error('Error generating presigned URL:', err);
  }
}


createBucketAndUpload().then(() => {
  generatePresignedUrl();
});
