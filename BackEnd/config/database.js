//BackEnd/config/database.js

const mongoose = require("mongoose")
const connection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGOURL,{
    dbName: 'User_Database',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('\t\t\t\t\t <---< -_- >--->\n\t\t\t  -----------Connected to the database-----------'))
.catch((err) => console.error('Connection error:', err));
        console.log("\t\t\t      -----------Database connected-----------\n");
    }

    catch (e) {
        console.log("DB Error: " + e);
    }
}

module.exports = connection;