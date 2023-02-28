import multer from "multer";

const storage = multer.diskStorage({
    desitnation: (req, file, callback) => callback(null, __dirname + "/../public/images"),
    filename: (req, file, callback) => callback(null, file.fieldname + "-" + Date.now() + ".jpeg")
});

const upload = multer({storage});

module.exports = upload;