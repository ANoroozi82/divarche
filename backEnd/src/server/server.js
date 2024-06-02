const http = require('http');
const routes = require('../routes/routes');
const responseController = require('../controllers/responseController');

module.exports = (diContainer) => {
  const server = http.createServer(async (req, res) => {
    try {
      let data = '';
      req.on('data', (chank) => {
        data += chank;
      });

      req.on('end', () => {
        data !== '' ? req['body'] = JSON.parse(data) : null;
        const routeClass = new routes(diContainer);
        routeClass.routes(req, res);
      });
    }
    catch (err) {
      responseController(res, 500, err.message, 'InternalError');
    }
  });

  server.listen(3000, () => {
    console.log('========> 🚀🚀🚀 Server is running on port 3000');
  });
};