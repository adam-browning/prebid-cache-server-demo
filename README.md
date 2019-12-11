# prebid-cache-server-demo
simple node.js cache server for prebid.js
- Post an object containing "puts" array of bid response objects and get a uuid for each
- you will receive an object contating a "responses" array of all uuids
- Get stored bid-response by passing a uuid query string parameter

# Cache server URL on Heroku:
https://perbid-cache-server-demo.herokuapp.com

# METHODS
## POST Example:
 POST / HTTP/1.1
Host: localhost:3030
Content-Type: application/json
User-Agent: PostmanRuntime/7.20.1
Accept: */*
Cache-Control: no-cache
Postman-Token: 8b245b55-074d-4eb4-8e3a-fe6012d3858c,dcbeded9-6428-43e5-9b6b-0591867fe843
Host: localhost:3030
Accept-Encoding: gzip, deflate
Content-Length: 1559
Connection: keep-alive
cache-control: no-cache

{
    "puts": [
        {
            "type": "xml",
            "value": "<VAST version=\"3.0\">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[https://log.adaptv.advertising.com/log?3a=adAttempt&1a8=0&e3=1&5=1192473&14=1192479&11d=5121632536931165&6a=-2&6b=-2&4f=7&fa=0&a.serverquota=100&a.actcnt=0&a.descnt=10000&nurl=Fago00ICfdR/oUcIj3E-gmLe8QEP7oQxXrEhfVY9FohjKMQ7Vuahx5QWYCETXtcmyv96K34YWbJH-W6QauKiAcbrJuTWBfNh&ff=0&121=3&124=54820f30b6239232b6250c2054820f30b6239232b6251d2&12a=verizonmedia.com&14d=131698&12d=8205&optout=0&3=-2&5c=rona&5b=6&18=0&2e=partners.dugout.com%2Fexamples%2Ftest%2Fprebid%2Fjwplayer-onevideo-real.html&30=dugout.com&32=1&fd=568157&80=3636365627841889410-VA6b535a11-11b8-11ea-981b-065e292ec2fe&118=uuid&f8=VA6b535a11-11b8-11ea-981b-065e292ec2fe&171=0&190=0&42=false&77=912102148&d6=eead2e29-152b-4ba4-896e-75b2ad9e0f2b&19d=1576063519194&bf=0&74=openrtb&ed=HBExchange&d5=1&d8=ip-10-112-106-90&ae=1&8e=-1&f0=-1&161=-1&68=3&c4=0&91=ONLINE_VIDEO&45=209.131.62.124&ee=Mac+OS+X&b5=-1&101=26&14b=-100&14c=-100&152=0&153=0&180=0&197=3&19e=5&195=1&120=0&112=1&64=dugout.com&18a=2&33=83527905&nextSeatbid=0&167=0&183=1&185=ZX4madbHHCc_&6c=G%2F1cd8HSICTSDB0fmIOGQfNBv%2FOgA%2FqIbkXuVC4-Uq%2FcYnb4FoiQ9s6DJswtpJfD&53=ZX4madbHHCc_&2c=ba1lg1B6584_&e9=auc_pr_b64&e8=MTAuMDEw&97=USD&18a=2&138=0&18d=0&a.cv=1]]></VASTAdTagURI>\n        <Impression></Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>",
            "ttlseconds": 100
        }
    ]
}

## GET Example:
GET /?uuid=46896460-1c1d-11ea-b263-a5e9b0a042d5 HTTP/1.1
Host: localhost:3030
Content-Type: application/json
User-Agent: PostmanRuntime/7.20.1
Accept: */*
Cache-Control: no-cache
Postman-Token: 38ca9941-c61d-4905-90c6-8123895eed9d,a5c6cac2-10e4-4621-a281-5e7c7f54798e
Host: localhost:3030
Accept-Encoding: gzip, deflate
Content-Length: 1559
Connection: keep-alive
cache-control: no-cache
