const http = require('http');

class Core {
    init() {
        this.server = null;
        this.request = null;
        this.response = null;
    }

    startServer(options) {
        this.server = http.createServer(function(req, res) {
            this.request = req;
            this.response = res;
            console.log(this.request);
            console.log(this.response);
        });

        this.server.listen(options.port, () => {
            console.log('Server is running on port ' + options.port);
        });
    }
}

module.exports = Core