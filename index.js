const HTTP = require('http');
const getBody = require('body/json');

function newServer(port){
    HTTP.createServer(function (req, res) {
        getBody(req, res, {/*opts*/}, function(err, body){
            if (err) {console.log("ERROR"); console.log(err);}
            parseIncoming(body);
        });
        res.writeHead(200, {/*headers*/});
        res.end();
    }).listen(port);    
}

function parseIncoming(rawMsg) {
    console.log(rawMsg)
}

newServer(5858);
newServer(5859);