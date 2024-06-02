const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require("uuid");

const bucketName = process.env.AR_AWS_BUCKET_NAME;
const bucketName1 = process.env.AR_AWS_BUCKET_NAME1;
const BUCKET_FOR_REDUCEMODEL = process.env.AR_AWS_BUCKET_NAME_FOR_REDUCEMODEL;
const BUCKET_FOR_USDZ_CONVERSION = process.env.AR_AWS_BUCKET_NAME_FOR_USDZ_CONVERSION;


const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

exports.uploadFile = async (file) => {
  let myFile = file.originalname.split(".");
  console.log('bucket Name: ', bucketName);
  const ext = myFile[myFile.length - 1];
  const uploadParams = {
    Bucket: bucketName,
    Body: file.buffer,
    Key: `${uuidv4()}.${ext}`,
    CacheControl: "max-age=86400",
    ContentType: file.mimetype,
  };
  const obj = await s3.upload(uploadParams).promise();
  return obj;
};
exports.uploadThumbnails_Logos = async (file) => {
  let myFile = file.originalname.split(".");
  const ext = myFile[myFile.length - 1];
  const uploadParams = {
    Bucket: bucketName1,
    Body: file.buffer,
    Key: `${uuidv4()}.${ext}`,
    CacheControl: "max-age=86400",
    ContentType: file.mimetype,
  };
  const obj = await s3.upload(uploadParams).promise();
  return obj;
};

exports.uploadModels_to_AWS = async (file, key, REDUCEMODEL) => {
  const ext = key + '.glb';
  const uploadParams = {
    Bucket: REDUCEMODEL? BUCKET_FOR_REDUCEMODEL : BUCKET_FOR_USDZ_CONVERSION,
    Key: ext,
    Body: file.buffer,
    Expires: 3600,
    CacheControl: "max-age=86400",
    ContentType: file.mimetype,
  };
  const obj = await s3.upload(uploadParams).promise();
  return obj;
};
exports.uploadArrayOfFiles = async (files) => {
  if (!Array.isArray(files)) {
    files = Array.of(files);
  }
  const fileArray = [];
  files.forEach((file) => {
    let myFile = file.originalname.split(".");
    const ext = myFile[myFile.length - 1];
    const uploadParams = {
      Bucket: bucketName,
      Body: file.buffer,
      Key: `${uuidv4()}.${ext}`,
      CacheControl: "max-age=86400",
      ContentType: file.mimetype,
    };
    fileArray.push(s3.upload(uploadParams).promise());
  });
  const images = await Promise.all(fileArray);
  return images;
};

exports.deleteFile = async (files) => {
  if (!files) {
    return false
  }
  // console.log("------KEY-------", key);
  const deleteParams = {
    Bucket: files.Bucket,
    Key: files.key,
  };
  const res = await s3.deleteObject(deleteParams).promise()
  console.log("========= S3 DELETE ========== ", res);
  return true
}