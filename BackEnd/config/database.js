//BackEnd/config/database.js

const mongoose = require("mongoose")
const connection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGOURL,{
    dbName: 'User_Database',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to the database…'))
.catch((err) => console.error('Connection error:', err));
        console.log("Database connected");
    }

    catch (e) {
        console.log("DB Error: " + e);
    }
}

module.exports = connection;