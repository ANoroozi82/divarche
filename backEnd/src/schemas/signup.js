module.exports = {
    'type' : 'object',
    'properties' : {
        'user' : {'type' : 'string'},
        'pass' : {'type' : 'string'},
        'role_name' : {'type' : 'string'},
        'city_id' : {'type' : 'string'},
        'phone_number' : {'type' : 'string'},
    },
    'required' : [
        'user',
        'pass',
        'role_name',
        'city_id',
        'phone_number',
    ],
    'additionalProperties' : false
}