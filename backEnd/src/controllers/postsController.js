const responseController = require('./responseController');

class PostsController {
  constructor(DIContainer) {
    this.postModel = DIContainer.get('postModel');
    this.categoryModel = DIContainer.get('categoryModel');
    this.categoriesModel = DIContainer.get('categoriesModel');
    this.fieldsModel = DIContainer.get('fieldsModel');
    this.subsetModel = DIContainer.get('subsetModel');

    this.getData = this.getData.bind(this);
    this.getSelectData = this.getSelectData.bind(this);
  }

  async getData(req, res) {
    try {
      let result;
      switch (req.body.from) {
        case 'posts': {
          result = await this.postModel.findAll();
          break;
        }
        case 'category': {
          result = await this.categoryModel.findAll();
          break;
        }
        case 'fields': {
          result = await this.fieldsModel.findAll();
          break;
        }
        case 'categories': {
          result = await this.categoriesModel.findAll();
          break;
        }
        case'subset': {
          result = await this.subsetModel.findAll();
          break;
        }
        default: {
          responseController(res, 400, 'Bad Request', 'badRequest');
          break;
        }
      }
      responseController(res, 200, result, 'Success');
    }
    catch (e) {
      responseController(res,500, e.message || 'Internal Server Error', 'InternalError');
    }
  }
  
  async getSelectData(req, res) {
    try {
      const params = this.splitParams(req.body.params);
      const {keys, values} = this.splitConditions(req.body.conditions);
      let result;
      switch (req.body.from) {
        case 'category': {
          result = await this.categoryModel.findBy(params, keys, values);
          break;
        }
        case 'posts': {
          result = await this.postModel.findBy(params, keys, values);
          break;
        }
        case 'fields': {
          result = await this.fieldsModel.findAll();
          break;
        }
        case 'categories': {
          result = await this.categoriesModel.findAll();
          break;
        }
        case'subset': {
          result = await this.subsetModel.findAll();
          break;
        }
        default: {
          responseController(res, 400, 'Bad Request', 'badRequest');
          break;
        }
      }
      responseController(res, 200, result, 'Success');
    }
    catch (e) {
      responseController(res,500, e.message || 'Internal Server Error', 'InternalError');
    }
  }

  splitParams(paramsList) {
    let params = '';
    if (paramsList.length > 1) {
      for (const paramsKey of paramsList) {
        params += paramsKey + ', ';
      }
    }
    else {
      params = paramsList[0];
    }
    return params;
  }

  splitConditions(conditionsObj) {
    let returns = {};
    returns.keys = Object.keys(conditionsObj);
    returns.values = [];
    for (const Element of returns.keys) {
      returns.values.push(conditionsObj[Element]);
    }
    return returns;
  }

  async add(req, res) {
    try {
      
    }
    catch (e) {
      responseController(res,500, e.message || 'Internal Server Error', 'InternalError');
    }
  }
}

module.exports = PostsController;