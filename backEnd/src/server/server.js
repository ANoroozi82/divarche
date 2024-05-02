const http = require('http');
const routes = require('../routes/routes');

module.exports = () => {
    const server = http.createServer(async (req, res) => {
        let data = '';
        req.on('data', (chank) => {
            data += chank;
        });

        req.on('end', () =>{
            data !== '' ? req['body'] = JSON.parse(data) : null;
            routes(req, res);
        });
    });

    server.listen(3000, () => {
        console.log('========> 🚀🚀🚀 Server is running on port 3000');
    });
}