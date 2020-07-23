const express = require('express');
const { request, response } = require('express');
const {readFile} = require('fs');

const app = express();

app.get('/',(request, response) => {

    readFile('./home.html', 'utf8', (err, html) => {
        if (err){
            response.status(500).send('sorry, out of order')
        }
        response.send(html);
    })
});

app.get('/stream',(request,response) => {
    
    readFile('./src/streamingPage.html','utf8', (err, html3) => {
        if(err){
            response.status(500).send('sorry, out of order')
        }
        response.send(html3);
    })


});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
