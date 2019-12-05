const express = require('express')
const app = express();
const morgan = require('morgan')
const marker = require('@ajar/marker');
​
//Middleware
app.use(morgan('dev'));
app.use(express.json());
​
​
//Routing
app.get('/',  (req, res) => {
    res.status(200).send('Hello Express!')
})
​
app.get('/users', (req, res) => {
    res.status(200).send('Get all Users')
})
​
app.post('/users',  (req, res) => {
    res.status(200).send('create a new User')
})
​
//Query
//http://localhost:3030/?key1=value1&Key2=value2
app.get('/query', (req,res) => {
    marker.blue('key 1 is:',req.query.key1);
    marker.blue('key 2 is:',req.query.key2);
    res.status(200).send(`These are the Query string params: ${req.query.key1}`);
})
​
//Params
//http://localhost:3030/params/tel-aviv/ramat-gan
app.get('/params/:from/:to/', (req, res) => {
    marker.blue('URL params are:', req.params.from);
    marker.blue('URL params are:', req.params.to);
    res.status(200).send(`The URL params are: ${req.params.from} and ${req.params.to}`);
})
​
//Body
//http://localhost:3030/body
app.post('/post', (req, res) => {
    marker.blue('Body JSON has name of:' , req.body.name)
    res.status(200).send(`created a new Robot named: ${req.body.name}`)
})
​
//Return JSON
//http://localhost:3030/json?key1=something
app.get('/json', (req, res) => {
    res.status(200).json({
        "title":"this is the json response",
        "key1": req.query.key1
    });
})
​
//Return HTML
//http://localhost:3030/html?key1=paragraphFromQuery
app.get('/html', (req, res) => {
    res.status(200).send(`<h1>TITLE RESPONSE</h1><p>${req.query.key1}</p>`);
})
​
​
app.get('*',  (req, res) => {
    res.status(404).send('My 404 not found')
})
​
app.listen(3030,  ()=> {
    console.log('listening on localhost:3030')
});
​
// install middleware - body-parser morgan - DONE
// configuring app middleware like so: - DONE
// app.use( morgan('dev') ); - DONE
//----------------------------
// define routes which use - DONE
//----------------------------
// req.query - DONE
// req.params - DONE
// req.body - DONE
// return api json dummy response - DONE
// return html markup dummy response - DONE
