const http = require('http');

const port = process.env.PORT || 3000;

const requestHandler = (req,res) => {
	console.log("Req for URL: " + req.url);
	res.writeHead(200);
	res.end("<h1>Hello, World!</h1>");
};

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
	if (error) throw error;
	console.log(`App running on port ${port}`);
})
