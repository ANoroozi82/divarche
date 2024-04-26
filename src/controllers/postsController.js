const responseController = require('./responseController');

class PostsController {
  constructor(DIContainer) {
    this.postModel = DIContainer.get('postModel');
    this.categoryModel = DIContainer.get('categoryModel');
    this.categoriesModel = DIContainer.get('categoriesModel');
    this.fieldsModel = DIContainer.get('fieldsModel');
    this.subsetModel = DIContainer.get('subsetModel');

    this.getData = this.getData.bind(this);
  }

  async getData(req, res) {
    let result;
    switch (req.body.from) {
      case 'category': {
        result = await this.categoryModel.findAll('category_name');
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
}

module.exports = PostsController;