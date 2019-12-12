const express = require('express');
const cors = require('cors');
const app = express();
const NodeCache = require( "node-cache" );
const createId = require('uuid/v1');

app.use(express.json());
app.use(cors());
app.options('*', cors())

const myCache = new NodeCache();

//POST
app.post('/',  (req, res) => {
    const responses = new Array;
    for (item of req.body.puts) {
        const uuid = createId();
        myCache.set(uuid, item, item.ttlseconds);
        responses.push({"uuid": uuid});
    }
    res.status(200).json({responses});
})

//GET
app.get('/',  (req, res) => {
    if (req.query.uuid === undefined) {
        res.status(400).send("Missing required parameter uuid");
    } else {
        const val = myCache.get(req.query.uuid);
        res.status(404).send(val ? val.value : "No content stored for uuid=" + req.query.uuid);
    }
});

app.listen(process.env.PORT || 3000);