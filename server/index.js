const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const {conn} = require('./Dbase/dbconnect')
const route = require('./Routes/AllRoutes')
const AllErrors = require('./MiddleLeware/ErrorsMiddleleware')
const fileUpload = require('express-fileupload')
const multer = require('multer');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', route);
app.use(fileUpload({}))

app.use(AllErrors) // Errors сайта


const storage = multer.diskStorage({
    destination: (_, __, cb) => {
      cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
      cb(null, file.originalname);
    },
});



const upload = multer({storage: storage});

app.post('/upload', (req, res) => {
    // Get the file that was set to our field named "image"
    const { image } = req.files;

    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    image.mv(__dirname + '/uploads/' + image.name);

    window.location.assign('/profile')

    res.sendStatus(200);
});


const start = async () => 
{
    try 
    {
        app.listen("1234", (err) => {
            if(err)
            {
                return console.log(err);
            }

            console.log("Ok");
        });
    }
    catch (e)
    {
        console.log(e);
    }
}

start();

conn.connect( err =>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("ok open")
    }
});


