const moment = require('jalali-moment');

module.exports = (res, statusCode, message, code) => {
    const currentDateTime = new Date();
    const jalaliDateTime = moment(currentDateTime).locale('fa').format('YYYY/MM/DD HH:mm:ss');
    res.writeHead(statusCode, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
            'meta': {
                'date&time': jalaliDateTime.replaceAll('/', '.').replaceAll(' ', ' | '),
                'code': code || 'null',
            }, 'data': {
                'message': message
            }
        })
    );
};