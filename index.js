const express = require('express');
const app = express();
const NodeCache = require( "node-cache" );
const createId = require('uuid/v1');

app.use(express.json());

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

//GET by UUID
app.get('/',  (req, res) => {
    const val = myCache.get(req.query.uuid);
    res.status(404).send(val ? val.value : "No content stored for uuid=" + req.query.uuid);
})

app.listen(process.env.PORT || 3000);
