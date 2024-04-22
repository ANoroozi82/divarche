module.exports = {
    'type' : 'object',
    'properties' : {
        'user' : {'type' : 'string'},
        'pass' : {'type' : 'string'},
    },
    'required' : [
        'user',
        'pass',
    ],
    'additionalProperties' : false
}