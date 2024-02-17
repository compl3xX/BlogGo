const multer = require('multer')
const dotenv = require('dotenv')

const cloudinary = require("cloudinary").v2;

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});


const storage = multer.memoryStorage()

const uploads = multer({ storage: storage })


const uploadToCloudinary = async (file) => {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return res;
}

const uploadMiddleware = (req, res, next) => {


    uploads.single('image')(req, res, async (err) => {



        if (err) {
            return res.status(500).send('File upload failed')
        }
        if (!req.file) {
            return res.status(400).send('No file uploaded')
        }

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await uploadToCloudinary(dataURI);


        req.cldRes = cldRes

        next();
    })
}

module.exports = uploadMiddleware