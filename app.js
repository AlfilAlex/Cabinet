'use strict';
// Importing modules
const express = require('express');
// Crating the app
const app = express();

// -----------------

// MULTER CONFIGURATION
// Preparing to download the images
const multer = require('multer');
// app.use(express.urlencoded({ extended: true }));

// SET STORAGE
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now());
        cb(null, file.originalname);
    },
});

var upload = multer({ storage: storage });

// -----------------
// -----------------
// -----------------

// Importing the routes
const photoRouter = require('./routes/photoRouter');

// app middleware
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('/uploads'));

// * Example
// // General Example
// app.use('/a',express.static('/b'));

// // Above line would serve all files/folders inside of the 'b' directory
// // And make them accessible through http://localhost:3000/a.
//

// Mounting
app.use('/api/v1/', photoRouter);
app.get('/', function (request, response) {
    response
        .status(200)
        .sendFile(
            '/home/alfilalex/Documentos/devopy/proyectos/cabinet/public/upload.html'
        );
});

// app exports

app.post(
    '/profile-upload-single',
    upload.single('profile-file'),
    (req, res) => {
        // req.file is the `profile-file` file
        // req.body will hold the text fields, if there were any
        console.log(JSON.stringify(req.file));
        var response = '<a href="/">Home</a><br>';
        response += 'Files uploaded successfully.<br>';
        response += `<img src="${req.file.path}" /><br>`;
        return res.send(response);
    }
);

// -----------------
// -----------------

module.exports = app;
