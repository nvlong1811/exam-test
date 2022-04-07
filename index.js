const express = require('express');
const cors = require('cors');

const PORT = 8000;
const HOST = 'localhost';

const app = express();
app.use(cors())
app.get('/' , (req, res) =>{
    res.send("Hello Long!");
});

app.listen(PORT, HOST);
console.log(`App running on http://${HOST}:${PORT}`)