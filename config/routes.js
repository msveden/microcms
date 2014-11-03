
var articles = require('../app/controllers/articles');

module.exports = function (app) {    
    app.get('/', function(req, res) {
        res.render('../views/index', { title: 'Express' });
    });
    app.get('/articles/:name', articles.index);    
};