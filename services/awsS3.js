const multer = require("multer");
const AWS = require("aws-sdk");
// Configure AWS
AWS.config.update({
  accessKeyId: process.env.IAM_USER_KEY,
  secretAccessKey: process.env.IAM_USER_SECRET,
});
const s3 = new AWS.S3();

exports.UploadToS3 = async (fileContent, filename, filetype) => {
  // Upload file to S3 bucket
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: filename,
    Body: fileContent, // Set the file buffer here
    ContentType: filetype,
    // ACL: "public-read", // optional, set the access control
  };
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject("something went wrong" + err);
      } else {
        console.log("Success", data);
        resolve(data.Location);
      }
    });
  });
};
