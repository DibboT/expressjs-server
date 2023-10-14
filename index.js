const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('My First Sever in ExpressJS')

})

app.get('/', (req, res) => {
    res.send('Wait For a Moment More Data Is Coming Soon')
})

app.listen(port, () => {
    console.log(`My First Server is Running on Port: ${port}`)
})