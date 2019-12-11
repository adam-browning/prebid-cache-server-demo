# prebid-cache-server-demo
node.js cache server for prebid.js

1. POST to url with JSON payload of obj
    {
        "puts": [
            {
                "type": "xml",
                "value":"VAST TAG",
                "ttlseconds" 100
            }
        ] //array of bids
    }
2. Each bid is stored and given a uuid
3. all uuid's are returned in object
    {"responses":[
            {"uuid":"df2051dc-af91-4126-8440-c0219981e120"},
            {"uuid":"random-number"}
        ]
    }
