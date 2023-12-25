const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './tmp')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const uploads = multer({ storage })

const uploadMiddleware = (req, res, next) => {

    uploads.single('image')(req, res, (err) => {

        if (err) {
            return res.status(500).send('File upload failed')
        }
        if (!req.file) {
            return res.status(400).send('No file uploaded')
        }

        req.uploadedFile = req.file

        next();
    })
}

module.exports = uploadMiddleware