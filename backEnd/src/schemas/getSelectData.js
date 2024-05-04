module.exports = {
  'type' : 'object',
  'properties' : {
    'from': {
      type: 'string',
    },
    'params': {
      type: 'array'
    },
    'conditions': {
      type:  'object',
    }
  },
  'required' : ['from', 'params', 'conditions'],
  'additionalProperties' : false
};