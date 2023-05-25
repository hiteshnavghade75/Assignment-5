var http = require("http");

const httpServer = http.createServer(handleServer);

const user = JSON.stringify([{
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
}]);

function handleServer(req, res) {
    if(req.url === '/welcome'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Welcome to Dominos!');
        res.end();
    }
    else if(req.url == '/contact'){
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.write(user);
        res.end();
    }
    else{
        res.writeHead(404);
        res.end();
    }
}

httpServer.listen(8081, () => {
    console.log("Server running on port 8081...")
});

module.exports = httpServer;