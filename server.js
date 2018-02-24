require('dotenv').config();

const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
