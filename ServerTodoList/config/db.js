const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });


const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            //findOneAndUpdate: false
        })

        console.log("DB conectada");

    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }

}

module.exports = conectarDB;