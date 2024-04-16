const Core = require('./framework/core')

const core = new Core();

core.init();

core.startServer({port: 5000});