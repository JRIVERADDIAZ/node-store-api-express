const mongoose = require("mongoose");

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true
    })
        .then(
            console.log('connected to the db')
        )
        .catch(
            (error) => {
                console.log(error);
            })
}

module.exports = connectDB