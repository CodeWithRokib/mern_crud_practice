import app from './app.js';
import colors from 'colors'
import dotenv from 'dotenv';
import dbConnect from './src/config/db.js';



dotenv.config({path:'../server/src/config/.env'});


//db
dbConnect();

// listen
app.listen(process.env.PORT, () =>
    console.log(`Server is running on http://localhost:${process.env.PORT}`.bgMagenta)
);



