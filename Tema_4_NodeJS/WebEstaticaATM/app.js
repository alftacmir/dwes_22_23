const express = require('express');
const app = express();  

app.use(express.static('public'));



app.listen('8080', (req, res) => {
    console.log('Express server listening on port 8080');
});    