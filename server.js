require('dotenv').config();

const HTTP = require('http');
const getBody = require('body/json');

const bot = require('./bot.js')

function newServer(port, pm){
    HTTP.createServer(function (req, res) {
        getBody(req, res, {/*opts*/}, function(err, body){
            if (err) {
                console.log("ERROR");
                console.log(err);
                res.writeHead(500, {/*headers*/});
                res.end();
                return;
            }
            body.pm = pm;
            bot.parseIncoming(body);
            res.writeHead(200, {/*headers*/});
            res.end();
        });
    }).listen(parseInt(port));
}

newServer(5858, false);
newServer(process.env.PM_BOT_PORT, true);
