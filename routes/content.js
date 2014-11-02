var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res) {
  //res.type('text/javascript');
  res.setHeader('content-type', 'text/javascript');
  //res.render('content', { title: 'Express' });
  var js = 'var greeting = "hello";';
  js += 'var section = document.getElementById("content-1");';
  js += 'console.log("' + req.params.name + '");';
  js += 'section.style.background = \"yellow\";';
  js += 'section.innerHTML = \"content from the awesome MicroCMS\"';
  res.end(js);
	
});

module.exports = router;
